import catalog from '../../data/catalog.json';

class Search {
  constructor() {
    this.searchParentDiv = document.getElementById('js-search');
    this.searchInput = document.getElementById('js-search__input');
    this.autocomplete = document.getElementById('js-search__autocomplete');
    this.searchBtn = document.getElementById('js-search__btn');
    this.suggestions = [];
    this.events();
  }

  events() {
    // display suggestions
    this.searchInput.addEventListener('input', () => { this.getSuggestions(2); });
    this.searchInput.addEventListener('focus', () => { this.getSuggestions(2); });

    // hide suggestions when elements in #js-search lose focus
    document.addEventListener('click', (e) => {
      if (!this.searchParentDiv.contains(e.target)) this.displaySuggestions([]);
    });

    // navigate to search result
    this.searchBtn.addEventListener('click', () => { this.navigateToResult(); });
    this.searchInput.addEventListener('keyup', (e) => {
      if (e.keyCode === 13) this.searchBtn.click();
    });
  }

  getSuggestions(numberOfSuggestions) {
    const input = this.searchInput.value.toLowerCase().trim();
    this.suggestions = [];

    if (input) {
      this.suggestions.input = input;
      for (const entry of catalog) {
        for (const synonym of entry.synonyms) {
          if (synonym.includes(input)) {
            this.suggestions.push({
              productType: entry.productType,
              href: entry.href,
            });
            break;
          }
        }
        if (this.suggestions.length >= numberOfSuggestions) break;
      }
    }
    this.displaySuggestions(this.suggestions);
  }

  displaySuggestions(suggestions) {
    this.autocomplete.innerHTML = '';
    suggestions.forEach((suggestion) => {
      const newLink = document.createElement('a');
      newLink.textContent = suggestion.productType;
      newLink.href = suggestion.href;
      this.autocomplete.appendChild(newLink);
    });
  }

  navigateToResult() {
    if (this.suggestions.input) {
      if (this.suggestions[0]) window.location = this.suggestions[0].href || `http://www.google.com/search?q=${this.suggestions[0].productType}` ;
      else window.location = `http://www.google.com/search?q=${this.suggestions.input}`;
    }
  }
}

export default Search;
