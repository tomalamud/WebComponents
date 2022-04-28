class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open'});

    this.title = this.getAttribute('title');
    this.paragraph = this.getAttribute('paragraph');
    this.img = this.getAttribute('img');
  }
  getTemplate() {
    const template = document.createElement('template');
    template.innerHTML = `
      <section>
        <h2>${this.title}</h2>
        <div>
          <img src="${this.img}"/>
          <p>${this.paragraph}</p>
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
        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
        img {
          height: 120px
        }
        section {
          background-color: slateblue;
          padding: 30px;
          border-radius: 4px;
          display: flex;
          justify-content: space-between;
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