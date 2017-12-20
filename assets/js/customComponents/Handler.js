var CustomComponent;
(function (CustomComponent) {
    class Handler {
        static define(classConstructor) {
            if ("customElements" in window) {
                let htmlTag = classConstructor.name.toLowerCase();
                window.customElements.define(`${Handler.suffix}-${htmlTag}`, classConstructor);
            }
            else {
                alert("Custom elements is not supported");
            }
        }
    }
    Handler.suffix = "cc";
    CustomComponent.Handler = Handler;
})(CustomComponent || (CustomComponent = {}));
//# sourceMappingURL=Handler.js.map