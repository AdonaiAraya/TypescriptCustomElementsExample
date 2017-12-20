var CustomComponent;
(function (CustomComponent) {
    var Components;
    (function (Components) {
        class Footer extends CustomComponent.Base {
            constructor() {
                super("block");
            }
            setHtml() {
                const footer = this.createChildElement("footer", "footer");
                const anchorWrapper = this.createChildElement("div", null, ["footerWrapper"]);
                const privacyPolicyAnchor = this.createChildElement("a", null, null, [{ name: "href", value: "#" }]);
                const termsAnchor = this.createChildElement("a", null, null, [{ name: "href", value: "#" }]);
                const cookiesPolicyAnchor = this.createChildElement("a", null, null, [{ name: "href", value: "#" }]);
                const separator01 = this.createChildElement("span", null, ["separator"]);
                const separator02 = this.createChildElement("span", null, ["separator"]);
                privacyPolicyAnchor.innerText = "Política de privacidad";
                termsAnchor.innerText = "Terminos de uso";
                cookiesPolicyAnchor.innerText = "Política de cookies";
                this.appendChildElements(anchorWrapper, [privacyPolicyAnchor, separator01, termsAnchor, separator02, cookiesPolicyAnchor]);
                this.appendChildElements(footer, [anchorWrapper]);
                this.appendHtml([footer]);
            }
        }
        Components.Footer = Footer;
    })(Components = CustomComponent.Components || (CustomComponent.Components = {}));
})(CustomComponent || (CustomComponent = {}));
//# sourceMappingURL=Footer.js.map