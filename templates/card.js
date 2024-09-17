class CustomMessage extends HTMLElement {
    constructor() {
        super();
        self = super();
        this.textContent = 'custom-string'
        console.log('here')
    }
}

customElements.define('custom-message', CustomMessage, { extends: "p" });