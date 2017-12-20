namespace CustomComponent.Components {
	export class AssistanceAgent extends Base {
		img: string = "";
		name: string = "";

		constructor(){
			super("block");
		}

		protected setAttributes(){
			this.img = this.getAttribute("data-img");
			this.name = this.getAttribute("data-name");
		};

		protected setHtml(){
			const container = this.createChildElement<HTMLHeadingElement>("div", null, ["assistanceAgent"]);
			const profileFigure = this.createChildElement<HTMLElement>("figure", null, ["assistanceAgentProfile"]);
			const profileImage = this.createChildElement<HTMLImageElement>("img", null, null, [{ name: "src", value: this.img }]);
			const dataContainer = this.createChildElement<HTMLDivElement>("div", null, ["assistanceAgentDataContainer"]);
			const name = this.createChildElement<HTMLSpanElement>("span", null, null, [{ name: "data-attr", value: "name" }]);

			name.innerText = `Nombre: ${this.name}`;

			this.appendChildElements(profileFigure, [profileImage]);
			this.appendChildElements(dataContainer, [name]);
			this.appendChildElements(container, [profileFigure, dataContainer]);

			this.appendHtml([container]);
		}

		static get observedAttributes(){ return ["data-name"] }

		public attributeChangedCallback(attr, oldValue, newValue){
			if(attr == "data-name" && oldValue != null){
				let searchElement = this.childElements.find((element) => {
					return element.getAttribute("data-attr") == "name";
				});

				if(searchElement) searchElement.innerText = newValue;
			}
		}
	}
}