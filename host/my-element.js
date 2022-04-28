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
          <p><slot name="paragraph"></slot></p>
        </div>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    // :host actuará como el estilo báse de todo el componente.
    return `
      <style>
        :host {
          display: inline-block;
          width: 100%;
          min-width: 300px;
          max-width: 400px;
          background-color: slateblue;
          margin: 5px;
          padding: 20px;
        }
        :host(.red) {
          background: red;
        }
        :host([yellow]) {
          background: yellow;
        }
        :host([yellow]) h2 {
          background: slateblue;
          color: white;
          padding: 10px;
          border-radius: 10px;
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