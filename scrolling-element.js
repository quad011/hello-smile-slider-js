class ScrollingElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });

    this.container = document.createElement("div");
    this.container.innerHTML = `<slot></slot>`;
    this.container.style.willChange = "transform";
    this.shadowRoot.appendChild(this.container);

    this._isVisible = false;
    this._updatePosition = this._updatePosition.bind(this);
  }

  connectedCallback() {
    this.fromY = this.getAttribute("fromY") || "0";
    this.toY = this.getAttribute("toY") || "0";
    this.fromX = this.getAttribute("fromX") || "0";
    this.toX = this.getAttribute("toX") || "0";
    this.speed = parseFloat(this.getAttribute("speed")) || 1;
    this.startPosition = this.getAttribute("startPosition") || "0";
    this.endPosition = this.getAttribute("endPosition") || "bottom";

    this._observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          this._isVisible = entry.isIntersecting;
          if (this._isVisible) {
            window.addEventListener("scroll", this._updatePosition);
            this._updatePosition();
          } else {
            window.removeEventListener("scroll", this._updatePosition);
          }
        });
      },
      { threshold: 0 }
    );

    this._observer.observe(this);
  }

  disconnectedCallback() {
    if (this._observer) this._observer.disconnect();
    window.removeEventListener("scroll", this._updatePosition);
  }

  _getScrollProgress() {
    const rect = this.getBoundingClientRect();
    const vh = window.innerHeight;

    let start = 0;
    let end = vh;

    if (this.startPosition === "top") start = 0;
    else if (this.startPosition === "center") start = vh / 2;
    else if (this.startPosition === "bottom") start = vh;

    if (this.endPosition === "top") end = 0;
    else if (this.endPosition === "center") end = vh / 2;
    else if (this.endPosition === "bottom") end = vh;

    const progress = (rect.top - start) / (end - start);
    return Math.min(Math.max(1 - progress, 0), 1); // clamp between 0–1
  }

  _updatePosition() {
    if (!this._isVisible) return;

    const progress = this._getScrollProgress();

    const fromY = this._cssUnitToPixels(this.fromY, "y");
    const toY = this._cssUnitToPixels(this.toY, "y");
    const fromX = this._cssUnitToPixels(this.fromX, "x");
    const toX = this._cssUnitToPixels(this.toX, "x");

    const currentY = fromY + (toY - fromY) * progress * this.speed;
    const currentX = fromX + (toX - fromX) * progress * this.speed;

    this.container.style.transform = `translate(${currentX}px, ${currentY}px)`;
  }

  _cssUnitToPixels(value, axis = "y") {
    if (value.includes("vw")) {
      return (parseFloat(value) / 100) * window.innerWidth;
    }
    if (value.includes("vh")) {
      return (parseFloat(value) / 100) * window.innerHeight;
    }
    return parseFloat(value); // assume px
  }
}

customElements.define("scrolling-element", ScrollingElement);
