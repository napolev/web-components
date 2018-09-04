/*! Built with http://stenciljs.com */
MyDomainCom.loadBundle('fa-tag', ['exports'], function (exports) {
    var h = window.MyDomainCom.h;
    var MyComponent = /** @class */ (function () {
        function MyComponent() {
        }
        MyComponent.prototype.render = function () {
            var classAttr = {
                'icon': true,
                'fa': true,
            };
            classAttr['fa-' + this.icon] = true;
            return [
                h("span", null, h("span", { class: classAttr }), h("span", { class: "text" }, this.text))
            ];
        };
        Object.defineProperty(MyComponent, "is", {
            get: function () { return "fa-tag"; },
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
                    "icon": {
                        "type": String,
                        "attr": "icon"
                    },
                    "text": {
                        "type": String,
                        "attr": "text"
                    }
                };
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(MyComponent, "style", {
            get: function () { return "\@font-face {\n  font-family: 'FontAwesome';\n  src: url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?v=4.7.0\");\n  src: url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.eot?#iefix&v=4.7.0\") format(\"embedded-opentype\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff2?v=4.7.0\") format(\"woff2\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.woff?v=4.7.0\") format(\"woff\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.ttf?v=4.7.0\") format(\"truetype\"), url(\"https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/fonts/fontawesome-webfont.svg?v=4.7.0#fontawesomeregular\") format(\"svg\");\n  font-weight: normal;\n  font-style: normal; }\n\n.fa {\n  display: inline-block;\n  font-family: 'FontAwesome';\n  font-size: inherit;\n  text-rendering: auto;\n  -webkit-font-smoothing: antialiased;\n  -moz-osx-font-smoothing: grayscale; }\n\n.fa-search:before {\n  content: \"\\f002\"; }\n\n.fa-search-plus:before {\n  content: \"\\f00e\"; }\n\n.fa-search-minus:before {\n  content: \"\\f010\"; }\n\n:host > span {\n  font-family: Tahoma;\n  border-radius: 8px;\n  padding: 2px 4px;\n  color: #cb2a2a;\n  background-color: #f9f779;\n  border: 1px solid #fe9d9d; }\n\n.icon {\n  display: inline-block;\n  font-size: 18px;\n  margin-left: 4px;\n  margin-right: 6px; }\n  .icon::before {\n    text-decoration: none;\n    color: #1e67c6; }"; },
            enumerable: true,
            configurable: true
        });
        return MyComponent;
    }());
    exports.FaTag = MyComponent;
    Object.defineProperty(exports, '__esModule', { value: true });
});
