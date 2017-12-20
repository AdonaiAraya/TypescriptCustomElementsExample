var CustomComponent;
(function (CustomComponent) {
    var Components;
    (function (Components) {
        class AssistanceAgent extends CustomComponent.Base {
            constructor() {
                super("block");
                this.img = "";
                this.name = "";
            }
            setAttributes() {
                this.img = this.getAttribute("data-img");
                this.name = this.getAttribute("data-name");
            }
            ;
            setHtml() {
                const container = this.createChildElement("div", null, ["assistanceAgent"]);
                const profileFigure = this.createChildElement("figure", null, ["assistanceAgentProfile"]);
                const profileImage = this.createChildElement("img", null, null, [{ name: "src", value: this.img }]);
                const dataContainer = this.createChildElement("div", null, ["assistanceAgentDataContainer"]);
                const name = this.createChildElement("span", null, null, [{ name: "data-attr", value: "name" }]);
                name.innerText = `Nombre: ${this.name}`;
                this.appendChildElements(profileFigure, [profileImage]);
                this.appendChildElements(dataContainer, [name]);
                this.appendChildElements(container, [profileFigure, dataContainer]);
                this.appendHtml([container]);
            }
            static get observedAttributes() { return ["data-name"]; }
            attributeChangedCallback(attr, oldValue, newValue) {
                if (attr == "data-name" && oldValue != null) {
                    let searchElement = this.childElements.find((element) => {
                        return element.getAttribute("data-attr") == "name";
                    });
                    if (searchElement)
                        searchElement.innerText = newValue;
                }
            }
        }
        Components.AssistanceAgent = AssistanceAgent;
    })(Components = CustomComponent.Components || (CustomComponent.Components = {}));
})(CustomComponent || (CustomComponent = {}));
//# sourceMappingURL=AssistanceAgent.js.map