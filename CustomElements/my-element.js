// Este es un componente estático.
class myElement extends HTMLElement {
  constructor() { // inicializa el componente
    super(); // para tener acceso a los métodos de la clase de la que extiende
    this.attachShadow({ mode: 'open'})
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
        <h2>Hola Mundo</h2>
        <div>
          <p>Este es mi primer elemento</p>
        </div>
      </section>
      ${this.getStyles()}
    `;
    return template;
  }
  getStyles() {
    return `
    <style>
      :host {
        display: inline-block;
        width: 100%;
        --primary-color: tomato;
        --secondary-color: salmon;
        --text-color: black;
      }
      section {
        background: var(--primary-color)
      }
      section div {
        background: var(--secondary-color)
      }
      p {
        color: var(--text-color)
      }
    </style>
  `;
  }
  render() {
    // una vez que en el constructor se inicializa el shadow dom, 
    // en vez de interactuar con el componente a través del document,
    // ahora hay que interactuar con él por medio del shadowRoot.
    this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true)); // true = clonar todos los elementos anidados dentro del nodo
  }
  connectedCallback() { // Lo carga como un nodo en el DOM
    this.render()
  }
}
customElements.define('my-element', myElement); // customElements viene de HTMLElements