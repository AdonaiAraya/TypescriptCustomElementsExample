namespace CustomComponent.Components {
	export class Header extends Base {
		constructor(){
			super("block");
		}

		protected setHtml(){
			const header = this.createChildElement<HTMLHeadingElement>("header", "header");
			const logoFigure = this.createChildElement<HTMLElement>("figure", "logo");
			const logo = this.createChildElement<HTMLImageElement>("img", null, null, [{name: "src", value: "assets/img/ocaso.png"}]);
			const menuDiv = this.createChildElement<HTMLDivElement>("div", "menuIcon");
			const menuIcon = this.createChildElement<HTMLElement>("i", null, ["icon-menu"]);

			menuIcon.addEventListener("click", () => { this.iconCommand(); });

			this.appendChildElements(logoFigure, [logo]);
			this.appendChildElements(menuDiv, [menuIcon]);
			this.appendChildElements(header, [menuDiv, logoFigure]);

			this.appendHtml([header]);
		}

		private iconCommand() {
			alert("Clicked on menu icon");
		}
	}
}