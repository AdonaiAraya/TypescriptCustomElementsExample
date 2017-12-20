var CustomComponent;
(function (CustomComponent) {
    var Components;
    (function (Components) {
        class MainContent extends CustomComponent.Base {
            constructor() {
                super("block");
            }
            setHtml() {
                const main = this.createChildElement("main", "mainContent");
                const mainWrapper = this.createChildElement("div", null, ["mainContentWrapper"]);
                this.transcludeHtml(mainWrapper);
                this.appendChildElements(main, [mainWrapper]);
                this.appendHtml([main]);
            }
        }
        Components.MainContent = MainContent;
    })(Components = CustomComponent.Components || (CustomComponent.Components = {}));
})(CustomComponent || (CustomComponent = {}));
//# sourceMappingURL=MainContent.js.map