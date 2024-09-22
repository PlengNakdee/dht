class DsCard extends HTMLElement {
    constructor() {
        super();
        this.attachShadow({ mode: 'open' });
        this.render();
        this.updateSize();
        this.updateState();
        this.updateVariant();
    }

    render() {
        this.shadowRoot.innerHTML = `
            <style>
                :host {
                    display: block;
                }
                .card {
                    border: 1px solid #E0E1E5;
                    border-radius: 8px;
                    overflow: hidden;
                }
                .card.hover {
                    border: none;
                    box-shadow: 0px 9px 10px 0px rgba(57, 45, 123, 0.07);
                }
                .image-wrapper {
                    text-align: center;
                    margin: 16px;
                }
                .horizontal {
                    display: flex;
                    align-items: center;
                }
                .horizontal .image-wrapper {
                    margin-right: 16px;
                }
                .thumbnail-wrapper {
                }
                .card img {
                    width: 100%;
                    display: block;
                }
                .content {
                    flex-grow: 1;
                }
                .vertical .title {
                    padding-left: 16px;
                }
                .vertical .description {
                    padding-left: 16px;
                }
                .vertical .subtitle-wrapper {
                    padding-left: 16px;
                }
                .title {
                    font-size: 16px;
                    font-weight: 500;
                    color: #392D7B;
                    margin: 0;
                }
                .description {
                    font-size: 14px;
                    font-weight: 400;
                    color: #9A99A7;
                    margin: 0 0 12px 0;
                }
                .subtitle-wrapper {
                    font-size: 12px;
                    font-weight: 500;
                    color: #5964AB;
                    margin-bottom: 12px;
                }
                .small, .md, .large, .md-deck {
                    width: auto;
                }
                .sm { width: 280px; }
                .md { width: 337px; }
                .md-deck { width: 236px; }
            </style>
            <div class="card">
                <div class="thumbnail-wrapper">
                    <slot name="thumbnail"></slot>
                </div>
                <div class="content ${this.getAttribute('variant') === 'horizontal' ? 'horizontal' : 'vertical'}">
                    <div class="image-wrapper">
                        <slot name="image"></slot>
                    </div>
                    <div class="content-details">
                        <h2 class="title">${this.getAttribute('title') || 'Default Title'}</h2>
                        <p class="description">${this.getAttribute('description') || 'No description provided.'}</p>
                        <div class="subtitle-wrapper">
                            <slot name="subtitle"></slot>
                        </div>
                    </div>
                </div>

            </div>
        `;
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
        const content = this.shadowRoot.querySelector('.content');
        content.classList.toggle('horizontal', variant === 'horizontal');
        content.classList.toggle('vertical', variant !== 'horizontal');
    }
}

customElements.define('ds-card', DsCard);
