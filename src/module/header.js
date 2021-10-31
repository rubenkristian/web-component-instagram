const template = document.createElement('template');

template.innerHTML = `
  <link rel="stylesheet" href="./stylesheet/header.css">

  <header class="header">
    <div class="content">
      <div class="left">
        <slot name="left"></slot>
      </div>
      <div class="center">
        <slot name="center"></slot>
      </div>
      <div class="right">
        <slot name="right"></slot>
      </div>
    </div>
    <slot></slot>
  </header>
`;

class HeaderMenu extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this
    .attachShadow({mode: 'open'})
    .appendChild(template.content.cloneNode(true));
    
  }

}

customElements.define('header-menu', HeaderMenu);