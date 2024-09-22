class DsCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });

        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .card {
                    border: 1px solid #ccc;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                
                .hover {
                    border: none;
                }
                .deck {
                    border: 1px solid #ccc;    /* Optional border for deck style */
                    box-shadow: none;           /* No shadow for deck style */
                    padding: 16px;              /* Padding for deck */
                }
                .image-wrapper {
                    margin-bottom: 12px;
                }
                .thumnail-wrapper {
                    margin: 0;
                }
                .card img {
                    width: 100%;
                    height: auto;
                }
                .content {
                    padding: 12px;
                }
                .title {
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 24px;
                    color: #392D7B;
                    margin: 0;
                }
                .description {
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 22px;
                    color: #9A99A7;
                    margin: 0;
                }
                .small {
                    width: 280px;
                }
                .md {
                    width: 280px;
                }
                .large {
                    width: 400px;
                }
            </style>
            <div class="card">
                <div class="thumbnail-wrapper">
                    <slot name="thumbnail"></slot>
                </div>
                <div class="content">
                    <div class="image-wrapper">
                        <slot name="image"></slot>
                    </div>
                    <h2 class="title">${this.getAttribute('title')}</h2>
                    <p class="description">${this.getAttribute('description')}</p>
                </div>
            </div>
        `;

        this.updateSize();
        this.updateState();
        this.updateVariant();
    }

    updateSize() {
        const size = this.getAttribute('size') || 'md';
        const usage = this.getAttribute('usage') || 'list';
        this.shadowRoot.querySelector('.card').classList.add(size);
    }

    updateState() {
        const state = this.getAttribute('state');
        if (state === 'hover') {
            this.shadowRoot.querySelector('.card').classList.add(state);
        }
    }

    updateVariant() {
        const variant = this.getAttribute('variant');
        if (variant === 'deck') {
            this.shadowRoot.querySelector('.card').classList.add('deck');
        }
    }
}

customElements.define('ds-card', DsCard);