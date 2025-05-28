class AnimatedElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    const fromY = parseFloat(this.getAttribute("fromY")) || 0;
    const toY = parseFloat(this.getAttribute("toY")) || 0;
    const delay = parseFloat(this.getAttribute("delay")) || 0;

    // Wrap slot in a container for animation
    const container = document.createElement("div");
    container.innerHTML = `<slot></slot>`;
    container.style.display = "inline-block";
    container.style.opacity = "0";
    container.style.transform = `translateY(${fromY}px)`;

    this.shadowRoot.appendChild(container);

    // Animate after delay
    setTimeout(() => {
      container.animate(
        [
          { transform: `translateY(${fromY}px)`, opacity: 0 },
          { transform: `translateY(${toY}px)`, opacity: 1 },
        ],
        {
          duration: 500,
          easing: "ease-out",
          fill: "forwards",
        }
      );
    }, delay * 1000);
  }
}

customElements.define("animated-element", AnimatedElement);
