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
                    border: 1px solid #E0E1E5;
                    border-radius: 8px;
                    overflow: hidden;
                    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
                }
                .hover {
                    border: none;
                }
                .list {
                }
                .deck {        
                }
                .image-wrapper {
                    padding-left: 16px;
                    margin-bottom: 12px;
                }
                .thumbnail-wrapper {
                    margin-bottom: 12px;
                }
                .card img {
                    width: 100%;
                }
                }
                .content {
                }
                .title {
                    font-size: 16px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 24px;
                    color: #392D7B;
                    padding-left: 16px;
                    margin: 0;
                }
                .description {
                    font-size: 14px;
                    font-style: normal;
                    font-weight: 400;
                    line-height: 22px;
                    color: #9A99A7;
                    padding-left: 16px;
                    margin-top: 0;
                    margin-bottom: 12px;
                }
                .subtitle-wrapper {
                    font-size: 12px;
                    font-style: normal;
                    font-weight: 500;
                    line-height: 16px;
                    color: #5964AB;
                    padding-left: 16px;
                    margin-bottom: 12px;
                }
                .small {
                    width: 280px;
                }
                .md {
                    width: 280px;
                }
                .md-deck {
                    width: 236px;
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
                    <div class="subtitle-wrapper">
                        <slot name="subtitle"></slot>
                    <div>
                </div>
            </div>
        `;

        this.updateSize();
        this.updateState();
        this.updateVariant();
    }

    updateSize() {
        const size = this.getAttribute('size') || 'md';
        this.shadowRoot.querySelector('.card').classList.add(size);
    }

    updateState() {
        const state = this.getAttribute('state');
        if (state === 'hover') {
            this.shadowRoot.querySelector('.card').classList.add('hover');
        }
    }

    updateVariant() {
        const variant = this.getAttribute('variant');
        if (variant === 'deck') {
            this.shadowRoot.querySelector('.card').classList.add('deck');
        } else {
            this.shadowRoot.querySelector('.card').classList.add('list');
        }
    }
}

customElements.define('ds-card', DsCard);