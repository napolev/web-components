export class MyComponent {
    constructor() {
        this.scale = 0;
    }
    render() {
        return [
            h("div", null,
                h("div", { class: "thumb", style: { "background-image": "url(" + this.thumb + ")" } },
                    h("a", { href: "#", class: "magnifying-glass fa fa-search-plus", onClick: (e) => this.togglePopup(e) })),
                h("span", { class: "name" }, this.name),
                h("br", null),
                h("a", { class: "button", href: "#", onClick: (e) => this.emitbuttonClicked(e) }, this.buttonText)),
            h("div", { class: "popup", style: {
                    "-ms-transform": "translate(-50%, -50%) scale(" + this.scale + ")",
                    "-webkit-transform": "translate(-50%, -50%) scale(" + this.scale + ")",
                    "transform": "translate(-50%, -50%) scale(" + this.scale + ")",
                    "background-image": "url(" + this.thumb + ")"
                } },
                h("a", { href: "#", class: "close fa fa-times", onClick: (e) => this.togglePopup(e) })),
            h("div", { class: "overlay", style: {
                    "display": (this.scale == 1) ? "block" : "none",
                }, onClick: (e) => this.togglePopup(e) })
        ];
    }
    togglePopup(e) {
        this.scale = (this.scale == 0) ? 1 : 0;
        e.preventDefault();
    }
    emitbuttonClicked(e) {
        this.buttonClicked.emit({
            name: this.name,
        });
        e.preventDefault();
    }
    static get is() { return "thumb-01-product"; }
    static get encapsulation() { return "shadow"; }
    static get properties() { return {
        "buttonText": {
            "type": String,
            "attr": "button-text"
        },
        "el": {
            "elementRef": true
        },
        "name": {
            "type": String,
            "attr": "name"
        },
        "scale": {
            "state": true
        },
        "thumb": {
            "type": String,
            "attr": "thumb"
        },
        "togglePopup": {
            "method": true
        }
    }; }
    static get events() { return [{
            "name": "buttonClicked",
            "method": "buttonClicked",
            "bubbles": true,
            "cancelable": true,
            "composed": true
        }]; }
    static get style() { return "/**style-placeholder:thumb-01-product:**/"; }
}
