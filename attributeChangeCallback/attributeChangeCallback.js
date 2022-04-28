class myElement extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open'});
  }
  static get observedAttributes() {
    return ['title', 'paragraph', 'img'];
  }
  attributeChangedCallback(currentValue, oldValue, newValue) {
    switch(currentValue) {
      case 'title':
        this.title = newValue;
        break;
      case 'paragraph':
        this.paragraph = newValue;
        break;
      case 'img':
        this.img = newValue;
        break;
    }
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
    console.log(this.observedAttributes)
  }
  connectedCallback() {
    this.render()
  }
}
customElements.define('my-element', myElement);