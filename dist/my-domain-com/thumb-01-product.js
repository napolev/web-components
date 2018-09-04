/*! Built with http://stenciljs.com */
const { h } = window.MyDomainCom;

class MyComponent {
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
    static get style() { return "\@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Zilla+Slab:300,300i,400,400i,500,500i,600,600i,700,700i);\n\@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css);\n:host {\n  display: inline-block;\n  margin: 5px 3px; }\n\n:host > div {\n  text-align: center; }\n\n.thumb {\n  position: relative;\n  width: 170px;\n  height: 170px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-color: #f0f0f0; }\n\n.name {\n  text-align: center;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  color: #686868; }\n\n.button {\n  font-family: 'Zilla Slab', serif;\n  font-weight: 600;\n  font-size: 13px;\n  text-decoration: none;\n  color: #fff;\n  border-radius: 10px;\n  padding: 1px 20px;\n  background-color: #20ad61; }\n  .button:hover {\n    background-color: #1c9755; }\n  .button:active {\n    background-color: #188249; }\n\n.magnifying-glass {\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n  display: inline-block;\n  padding: 2px 3px;\n  border-top-right-radius: 5px;\n  font-size: 22px;\n  text-decoration: none;\n  outline: none;\n  color: #3c5681;\n  background-color: #d2e9ff; }\n  .magnifying-glass:hover {\n    color: #344a70; }\n  .magnifying-glass:active {\n    color: #2c3f5e; }\n\n:host > .popup {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  display: inline-block;\n  width: 80%;\n  height: 80%;\n  -webkit-transition: -webkit-transform .2s;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s;\n  z-index: 1000;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-color: #eee;\n  border-radius: 5px; }\n\n:host > .popup > .close {\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: inline-block;\n  font-size: 20px;\n  color: #fff;\n  text-decoration: none;\n  padding: 1px 4px 4px 4px;\n  background-color: #f60000;\n  border-bottom-left-radius: 5px; }\n\n:host > .overlay {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  background-color: #000;\n  opacity: 0.7; }"; }
}

export { MyComponent as Thumb01Product };
