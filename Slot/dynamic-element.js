class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open'})
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
        <h2>
          <slot></slot>
        </h2>
        <div>
          <p><slot name="parrafo"></slot></p>
        </div>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
      <style>
        h2 {
          color: #4dd331;
        }
        p {
          color: white;
        }
        section {
          background-color: slategray;
          padding: 4px;
          border-radius: 4px;
        }
      </style>
    `;
  }
  render() {
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true)); // true = clonar todos los elementos anidados dentro del nodo
  }
  connectedCallback() {
    this.render()
  }
}
customElements.define('my-element', myElement);