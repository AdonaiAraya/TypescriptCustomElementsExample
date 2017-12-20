namespace CustomComponent {
	export interface IAttribute {
		name: string;
		value: string;
	}

	export abstract class Base extends HTMLElement {
		protected childElements: Array<HTMLElement> = [];
		protected displayType: string;

		constructor(displayType: string){
			super();

			this.displayType = displayType;

			this.setCustomComponent();
			this.setAttributes();
			this.setHtml();
		}

		protected createChildElement<TType>(
			htmlElementTag: string,
			id?: string,
			cssClasses?: Array<string>,
			attributes?: Array<IAttribute>
		): TType{

			let element = document.createElement(htmlElementTag);

			if(id) element.id = id;
			if(cssClasses && cssClasses.length) cssClasses.map((cssClass) => { element.classList.add(cssClass); });
			if(attributes && attributes.length) attributes.map((attribute) => { element.setAttribute(attribute.name, attribute.value) });

			this.childElements.push(element);

			return <TType>(<any>element);
		}

		protected appendChildElements(parent: HTMLElement, elements: Array<HTMLElement>){
			if(elements.length){
				elements.forEach((element) => {
					parent.appendChild(element);
				})
			}
		}

		protected appendHtml(elements: Array<HTMLElement>){
			if(elements.length){
				elements.forEach((element) => {
					this.appendChild(element);
				});
			}
		}

		protected transcludeHtml(toElement: HTMLElement){
			const innerHtml: string = this.innerHTML;
			this.innerHTML = "";
			toElement.innerHTML = innerHtml;
		}

		private setCustomComponent(){
			this.setAttribute("data-custom-component", "");
			this.classList.add(this.displayType.toLowerCase());
		}

		protected setAttributes(){};

		protected abstract setHtml();
	}
}