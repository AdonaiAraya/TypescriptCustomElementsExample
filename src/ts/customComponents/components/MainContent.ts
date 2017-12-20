namespace CustomComponent.Components {
	export class MainContent extends Base {
		constructor(){
			super("block");
		}

		protected setHtml(){
			const main = this.createChildElement<HTMLHeadingElement>("main", "mainContent");
			const mainWrapper = this.createChildElement<HTMLDivElement>("div", null, ["mainContentWrapper"]);

			this.transcludeHtml(mainWrapper);

			this.appendChildElements(main, [mainWrapper]);

			this.appendHtml([main]);
		}
	}
}