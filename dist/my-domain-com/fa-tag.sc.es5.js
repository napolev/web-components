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
            get: function () { return "\n\@import url(https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.css);\n.sc-fa-tag-h    > span.sc-fa-tag {\n  font-family: Tahoma;\n  border-radius: 8px;\n  padding: 2px 4px;\n  color: #cb2a2a;\n  background-color: #f9f779;\n  border: 1px solid #fe9d9d; }\n\n.sc-fa-tag-h    > span.sc-fa-tag    > span.icon.sc-fa-tag {\n  display: inline-block;\n  font-size: 18px;\n  margin-left: 4px;\n  margin-right: 6px; }\n  .sc-fa-tag-h    > span.sc-fa-tag    > span.icon.sc-fa-tag::before {\n    text-decoration: none;\n    color: #1e67c6; }\n"; },
            enumerable: true,
            configurable: true
        });
        return MyComponent;
    }());
    exports.FaTag = MyComponent;
    Object.defineProperty(exports, '__esModule', { value: true });
});
