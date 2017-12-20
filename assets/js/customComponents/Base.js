var CustomComponent;
(function (CustomComponent) {
    class Base extends HTMLElement {
        constructor(displayType) {
            super();
            this.childElements = [];
            this.displayType = displayType;
            this.setCustomComponent();
            this.setAttributes();
            this.setHtml();
        }
        createChildElement(htmlElementTag, id, cssClasses, attributes) {
            let element = document.createElement(htmlElementTag);
            if (id)
                element.id = id;
            if (cssClasses && cssClasses.length)
                cssClasses.map((cssClass) => { element.classList.add(cssClass); });
            if (attributes && attributes.length)
                attributes.map((attribute) => { element.setAttribute(attribute.name, attribute.value); });
            this.childElements.push(element);
            return element;
        }
        appendChildElements(parent, elements) {
            if (elements.length) {
                elements.forEach((element) => {
                    parent.appendChild(element);
                });
            }
        }
        appendHtml(elements) {
            if (elements.length) {
                elements.forEach((element) => {
                    this.appendChild(element);
                });
            }
        }
        transcludeHtml(toElement) {
            const innerHtml = this.innerHTML;
            this.innerHTML = "";
            toElement.innerHTML = innerHtml;
        }
        setCustomComponent() {
            this.setAttribute("data-custom-component", "");
            this.classList.add(this.displayType.toLowerCase());
        }
        setAttributes() { }
        ;
    }
    CustomComponent.Base = Base;
})(CustomComponent || (CustomComponent = {}));
//# sourceMappingURL=Base.js.map