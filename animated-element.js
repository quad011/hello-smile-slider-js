class AnimatedElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.container = document.createElement("div");
    this.container.innerHTML = `<slot></slot>`;
    this.container.style.display = "inline-block";
    this.container.style.opacity = "0";
    this.shadowRoot.appendChild(this.container);

    this._hasAnimated = false; // prevent re-animation
  }

  connectedCallback() {
    this.fromX = parseFloat(this.getAttribute("fromX")) || 0;
    this.toX = parseFloat(this.getAttribute("toX")) || 0;
    this.fromY = parseFloat(this.getAttribute("fromY")) || 0;
    this.toY = parseFloat(this.getAttribute("toY")) || 0;
    this.fromScale = parseFloat(this.getAttribute("fromScale")) || 1;
    this.toScale = parseFloat(this.getAttribute("toScale")) || 1;
    this.delay = parseFloat(this.getAttribute("delay")) || 0;
    this.duration = parseInt(this.getAttribute("duration")) || 1000;

    this.container.style.transform = `translate(${this.fromX}px, ${this.fromY}px) scale(${this.fromScale})`;
  }

  animateIn() {
    if (this._hasAnimated) return;
    this._hasAnimated = true;

    setTimeout(() => {
      this.container.animate(
        [
          {
            transform: `translate(${this.fromX}px, ${this.fromY}px) scale(${this.fromScale})`,
            opacity: 0,
          },
          {
            transform: `translate(${this.toX}px, ${this.toY}px) scale(${this.toScale})`,
            opacity: 1,
          },
        ],
        {
          duration: this.duration,
          easing: "cubic-bezier(0.22, 1, 0.36, 1)",
          fill: "forwards",
        }
      );
    }, this.delay * 1000);
  }
}

customElements.define("animated-element", AnimatedElement);
