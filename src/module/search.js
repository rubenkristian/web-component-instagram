const template = document.createElement('template');
template.innerHTML = `
  <link rel="stylesheet" href="./stylesheet/search.css">

  <div class="search">
      <input type="text" placeholder="search..."/>
      <div class="box_suggestion">
          <div style="width:300px">
          </div>
      </div>
  </div>
`;

class SearchBox extends HTMLElement {
  constructor() {
    super();

    let mouseClick = false;

    const shadowRoot = this
    .attachShadow({mode: 'open'})
    .appendChild(template.content.cloneNode(true));

    const searchInput = this.shadowRoot.querySelector('input');
    const searchBox = this.shadowRoot.querySelector('.search');
    const searchSuggestion = this.shadowRoot.querySelector('.box_suggestion');

    searchBox.addEventListener('click', () => {
      searchInput.focus();
    });

    searchInput.addEventListener('focus', () => {
      searchBox.classList.add('active');
      searchSuggestion.classList.add('show');
    });

    searchInput.addEventListener('blur', (e) => {
      if(mouseClick) {
        mouseClick = false;
      } else {
        searchBox.classList.remove('active');
        searchSuggestion.classList.remove('show');
      }
    });

    searchSuggestion.addEventListener('click', (e) => {
      mouseClick = true;
    });

  }
}

customElements.define('search-box', SearchBox);