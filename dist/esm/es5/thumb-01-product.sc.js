/*! Built with http://stenciljs.com */
import { h } from './my-domain-com.core.js';
var MyComponent = /** @class */ (function () {
    function MyComponent() {
        this.scale = 0;
    }
    MyComponent.prototype.render = function () {
        var _this = this;
        return [
            h("div", null, h("div", { class: "thumb", style: { "background-image": "url(" + this.thumb + ")" } }, h("a", { href: "#", class: "magnifying-glass fa fa-search-plus", onClick: function (e) { return _this.togglePopup(e); } })), h("span", { class: "name" }, this.name), h("br", null), h("a", { class: "button", href: "#", onClick: function (e) { return _this.emitbuttonClicked(e); } }, this.buttonText)),
            h("div", { class: "popup", style: {
                    "-ms-transform": "translate(-50%, -50%) scale(" + this.scale + ")",
                    "-webkit-transform": "translate(-50%, -50%) scale(" + this.scale + ")",
                    "transform": "translate(-50%, -50%) scale(" + this.scale + ")",
                    "background-image": "url(" + this.thumb + ")"
                } }, h("a", { href: "#", class: "close fa fa-times", onClick: function (e) { return _this.togglePopup(e); } })),
            h("div", { class: "overlay", style: {
                    "display": (this.scale == 1) ? "block" : "none",
                }, onClick: function (e) { return _this.togglePopup(e); } })
        ];
    };
    MyComponent.prototype.togglePopup = function (e) {
        this.scale = (this.scale == 0) ? 1 : 0;
        e.preventDefault();
    };
    MyComponent.prototype.emitbuttonClicked = function (e) {
        this.buttonClicked.emit({
            name: this.name,
        });
        e.preventDefault();
    };
    Object.defineProperty(MyComponent, "is", {
        get: function () { return "thumb-01-product"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyComponent, "encapsulation", {
        get: function () { return "shadow"; },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyComponent, "properties", {
        get: function () {
            return {
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
            };
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyComponent, "events", {
        get: function () {
            return [{
                    "name": "buttonClicked",
                    "method": "buttonClicked",
                    "bubbles": true,
                    "cancelable": true,
                    "composed": true
                }];
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyComponent, "style", {
        get: function () { return "\n\@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Zilla+Slab:300,300i,400,400i,500,500i,600,600i,700,700i);\n\@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css);\n.sc-thumb-01-product-h {\n  display: inline-block;\n  margin: 5px 3px; }\n\n.sc-thumb-01-product-h    > div.sc-thumb-01-product {\n  text-align: center; }\n\n.thumb.sc-thumb-01-product {\n  position: relative;\n  width: 170px;\n  height: 170px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-color: #f0f0f0; }\n\n.name.sc-thumb-01-product {\n  text-align: center;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  color: #686868; }\n\n.button.sc-thumb-01-product {\n  font-family: 'Zilla Slab', serif;\n  font-weight: 600;\n  font-size: 13px;\n  text-decoration: none;\n  color: #fff;\n  border-radius: 10px;\n  padding: 1px 20px;\n  background-color: #20ad61; }\n  .button.sc-thumb-01-product:hover {\n    background-color: #1c9755; }\n  .button.sc-thumb-01-product:active {\n    background-color: #188249; }\n\n.magnifying-glass.sc-thumb-01-product {\n  position: absolute;\n  left: 0px;\n  bottom: 0px;\n  display: inline-block;\n  padding: 2px 3px;\n  border-top-right-radius: 5px;\n  font-size: 22px;\n  text-decoration: none;\n  outline: none;\n  color: #3c5681;\n  background-color: #d2e9ff; }\n  .magnifying-glass.sc-thumb-01-product:hover {\n    color: #344a70; }\n  .magnifying-glass.sc-thumb-01-product:active {\n    color: #2c3f5e; }\n\n.sc-thumb-01-product-h    > .popup.sc-thumb-01-product {\n  position: fixed;\n  left: 50%;\n  top: 50%;\n  display: inline-block;\n  width: 80%;\n  height: 80%;\n  -webkit-transition: -webkit-transform .2s;\n  transition: -webkit-transform .2s;\n  transition: transform .2s;\n  transition: transform .2s, -webkit-transform .2s;\n  z-index: 1000;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-color: #eee;\n  border-radius: 5px; }\n\n.sc-thumb-01-product-h    > .popup.sc-thumb-01-product    > .close.sc-thumb-01-product {\n  position: absolute;\n  right: 0;\n  top: 0;\n  display: inline-block;\n  font-size: 20px;\n  color: #fff;\n  text-decoration: none;\n  padding: 1px 4px 4px 4px;\n  background-color: #f60000;\n  border-bottom-left-radius: 5px; }\n\n.sc-thumb-01-product-h    > .overlay.sc-thumb-01-product {\n  position: fixed;\n  left: 0;\n  top: 0;\n  width: 100%;\n  height: 100%;\n  z-index: 999;\n  background-color: #000;\n  opacity: 0.7; }\n"; },
        enumerable: true,
        configurable: true
    });
    return MyComponent;
}());
export { MyComponent as Thumb01Product };
