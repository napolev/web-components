/*! Built with http://stenciljs.com */
MyDomainCom.loadBundle('thumb-02-product', ['exports'], function (exports) {
    var h = window.MyDomainCom.h;
    var MyComponent = /** @class */ (function () {
        function MyComponent() {
            this.target = '_self';
        }
        MyComponent.prototype.render = function () {
            return [
                h("div", null, h("div", { class: "thumb", style: { "background-image": "url(" + this.thumb + ")" } }), h("div", { class: "description" }, this.description), h("div", null, h("a", { href: this.url, class: "button", target: this.target }, this.buttonText)))
            ];
        };
        Object.defineProperty(MyComponent, "is", {
            get: function () { return "thumb-02-product"; },
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
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MyComponent, "style", {
            get: function () { return "\n\@import url(https://fonts.googleapis.com/css?family=Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i|Zilla+Slab:300,300i,400,400i,500,500i,600,600i,700,700i);\n.sc-thumb-02-product-h {\n  display: inline-block;\n  margin: 5px 3px;\n  vertical-align: top; }\n\n.sc-thumb-02-product-h    > div.sc-thumb-02-product {\n  position: relative;\n  text-align: center;\n  border: 1px solid #c0c0c0;\n  padding: 10px;\n  width: 215px;\n  min-height: 360px; }\n\n.thumb.sc-thumb-02-product {\n  position: relative;\n  height: 170px;\n  background-size: contain;\n  background-repeat: no-repeat;\n  background-position: 50%;\n  background-color: #eee; }\n\n.description.sc-thumb-02-product {\n  display: block;\n  font-family: 'Open Sans', sans-serif;\n  font-size: 14px;\n  font-weight: 600;\n  color: #686868;\n  text-align: left;\n  padding: 18px 2px 10px 2px; }\n\n.button.sc-thumb-02-product {\n  position: absolute;\n  bottom: 3px;\n  left: 50%;\n  -webkit-transform: translate(-50%);\n  transform: translate(-50%);\n  font-family: 'Open Sans', sans-serif;\n  font-size: 12px;\n  text-decoration: none;\n  color: #686868; }\n  .button.sc-thumb-02-product:hover {\n    color: #353535; }\n  .button.sc-thumb-02-product:active {\n    color: #020202; }\n"; },
            enumerable: true,
            configurable: true
        });
        return MyComponent;
    }());
    exports.Thumb02Product = MyComponent;
    Object.defineProperty(exports, '__esModule', { value: true });
});
