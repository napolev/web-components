export class MyComponent {
    render() {
        let classAttr = {
            'icon': true,
            'fa': true,
        };
        classAttr['fa-' + this.icon] = true;
        return [
            h("span", null,
                h("span", { class: classAttr }),
                h("span", { class: "text" }, this.text))
        ];
    }
    static get is() { return "fa-tag"; }
    static get properties() { return {
        "icon": {
            "type": String,
            "attr": "icon"
        },
        "text": {
            "type": String,
            "attr": "text"
        }
    }; }
    static get style() { return "/**style-placeholder:fa-tag:**/"; }
}
