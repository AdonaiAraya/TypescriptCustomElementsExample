namespace CustomComponent.Components {
	export class AssistanceAgentsList extends Base {
		constructor(){
			super("block");
		}

		protected setHtml(){
			const list = this.createChildElement<HTMLHeadingElement>("div", null, ["assistanceAgentsList"]);

			this.transcludeHtml(list);

			this.appendHtml([list]);
		}
	}
}