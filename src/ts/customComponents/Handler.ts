namespace CustomComponent {
	export class Handler {
		private static suffix: string = "cc";

		public static define(classConstructor: Function){
			if("customElements" in window){
				let htmlTag = (<any>classConstructor).name.toLowerCase();
				window.customElements.define(`${Handler.suffix}-${htmlTag}`, classConstructor);
			}
			else {
				alert("Custom elements is not supported");
			}
		}
	}
}