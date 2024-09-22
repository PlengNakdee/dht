class DsCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        const template = document.createElement('template');
        template.innerHTML = `
            <style>
                .card {
                    display: block;
                    border: 1px solid #E0E1E5;
                    border-radius: 12px;
                    padding: 16px;
                    max-width: 300px;
                    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
                }
                .card-title {
                    font-size: 1.5em;
                    margin: 0;
                }
                .card-content {
                    margin: 0.5em 0;
                }
                .card-image {
                    max-width: 100%;
                }
                ::slotted(svg) {
                    width: 100%; /* Ensure the slot content fills the width */
                    height: auto; /* Maintain aspect ratio */
                }
            </style>
            <div class="card">
            <slot name="image"></slot>
                <h2 class="card-title">${this.getAttribute('title')}</h2>
                <p class="card-content">${this.getAttribute('content')}</p>
            </div>
        `;
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
}

customElements.define('ds-card', DsCard);