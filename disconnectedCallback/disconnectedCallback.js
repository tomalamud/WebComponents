class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    console.log("Hola desde el constructor - memoria")
  };
  connectedCallback() {
    console.log("Hola desde el DOM")
  };
  disconnectedCallback() {
    // sirve para deslindar de eventos a nuestros componentes
    console.log("Adios del DOM")
  };
};

customElements.define("my-custom-element", MyCustomElement);

document.querySelector('my-custom-element').remove();