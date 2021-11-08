const template = document.createElement('template');

template.innerHTML = `
  <link rel="stylesheet" href="./stylesheet/card-content.css">
  <div class="card">
  </div>
`;

class CardContent extends HTMLElement {
  constructor() {
    super();

    const shadowRoot = this
    .attachShadow({mode: 'open'})
    .appendChild(template.content.cloneNode(true));
  }
}

customElements.define('card-content', CardContent);