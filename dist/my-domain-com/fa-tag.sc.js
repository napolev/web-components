/*! Built with http://stenciljs.com */
const { h } = window.MyDomainCom;

class MyComponent {
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
    static get encapsulation() { return "shadow"; }
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
    static get style() { return "\n\@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css);\n.sc-fa-tag-h    > span.sc-fa-tag {\n  font-family: Tahoma;\n  border-radius: 8px;\n  padding: 2px 4px;\n  color: #cb2a2a;\n  background-color: #f9f779;\n  border: 1px solid #fe9d9d; }\n\n.sc-fa-tag-h    > span.sc-fa-tag    > span.icon.sc-fa-tag {\n  display: inline-block;\n  font-size: 18px;\n  margin-left: 4px;\n  margin-right: 6px; }\n  .sc-fa-tag-h    > span.sc-fa-tag    > span.icon.sc-fa-tag::before {\n    text-decoration: none;\n    color: #1e67c6; }\n"; }
}

export { MyComponent as FaTag };
