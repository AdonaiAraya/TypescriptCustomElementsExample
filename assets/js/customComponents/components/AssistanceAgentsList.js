var CustomComponent;
(function (CustomComponent) {
    var Components;
    (function (Components) {
        class AssistanceAgentsList extends CustomComponent.Base {
            constructor() {
                super("block");
            }
            setHtml() {
                const list = this.createChildElement("div", null, ["assistanceAgentsList"]);
                this.transcludeHtml(list);
                this.appendHtml([list]);
            }
        }
        Components.AssistanceAgentsList = AssistanceAgentsList;
    })(Components = CustomComponent.Components || (CustomComponent.Components = {}));
})(CustomComponent || (CustomComponent = {}));
//# sourceMappingURL=AssistanceAgentsList.js.map