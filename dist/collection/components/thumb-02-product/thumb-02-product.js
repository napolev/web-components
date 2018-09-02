export class MyComponent {
    constructor() {
        this.target = '_self';
    }
    render() {
        return [
            h("div", null,
                h("div", { class: "thumb", style: { "background-image": "url(" + this.thumb + ")" } }),
                h("div", { class: "description" }, this.description),
                h("div", null,
                    h("a", { href: this.url, class: "button", target: this.target }, this.buttonText)))
        ];
    }
    static get is() { return "thumb-02-product"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "buttonText": {
            "type": String,
            "attr": "button-text"
        },
        "description": {
            "type": String,
            "attr": "description"
        },
        "el": {
            "elementRef": true
        },
        "target": {
            "type": String,
            "attr": "target"
        },
        "thumb": {
            "type": String,
            "attr": "thumb"
        },
        "url": {
            "type": String,
            "attr": "url"
        }
    }; }
    static get style() { return "/**style-placeholder:thumb-02-product:**/"; }
}
