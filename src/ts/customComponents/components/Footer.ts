namespace CustomComponent.Components {
	export class Footer extends Base {
		constructor(){
			super("block");
		}

		protected setHtml(){
			const footer = this.createChildElement<HTMLElement>("footer", "footer");
			const anchorWrapper = this.createChildElement<HTMLDivElement>("div", null, ["footerWrapper"]);
			const privacyPolicyAnchor = this.createChildElement<HTMLAnchorElement>("a", null, null, [{ name: "href", value: "#" }]);
			const termsAnchor = this.createChildElement<HTMLAnchorElement>("a", null, null, [{ name: "href", value: "#" }]);
			const cookiesPolicyAnchor = this.createChildElement<HTMLAnchorElement>("a", null, null, [{ name: "href", value: "#" }]);
			const separator01 = this.createChildElement<HTMLSpanElement>("span", null, ["separator"]);
			const separator02 = this.createChildElement<HTMLSpanElement>("span", null, ["separator"]);

			privacyPolicyAnchor.innerText = "Política de privacidad";
			termsAnchor.innerText = "Terminos de uso";
			cookiesPolicyAnchor.innerText = "Política de cookies";

			this.appendChildElements(anchorWrapper, [privacyPolicyAnchor, separator01, termsAnchor, separator02, cookiesPolicyAnchor]);
			this.appendChildElements(footer, [anchorWrapper]);

			this.appendHtml([footer]);
		}
	}
}