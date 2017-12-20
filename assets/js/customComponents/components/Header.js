var CustomComponent;
(function (CustomComponent) {
    var Components;
    (function (Components) {
        class Header extends CustomComponent.Base {
            constructor() {
                super("block");
            }
            setHtml() {
                const header = this.createChildElement("header", "header");
                const logoFigure = this.createChildElement("figure", "logo");
                const logo = this.createChildElement("img", null, null, [{ name: "src", value: "assets/img/ocaso.png" }]);
                const menuDiv = this.createChildElement("div", "menuIcon");
                const menuIcon = this.createChildElement("i", null, ["icon-menu"]);
                menuIcon.addEventListener("click", () => { this.iconCommand(); });
                this.appendChildElements(logoFigure, [logo]);
                this.appendChildElements(menuDiv, [menuIcon]);
                this.appendChildElements(header, [menuDiv, logoFigure]);
                this.appendHtml([header]);
            }
            iconCommand() {
                alert("Clicked on menu icon");
            }
        }
        Components.Header = Header;
    })(Components = CustomComponent.Components || (CustomComponent.Components = {}));
})(CustomComponent || (CustomComponent = {}));
//# sourceMappingURL=Header.js.map