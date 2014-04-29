const EXPORTED_SYMBOLS = [];

Components.utils.import("resource:///modules/CustomizableUI.jsm");
CustomizableUI.registerArea("addonbarteo-addon-bar", {
	type: CustomizableUI.TYPE_TOOLBAR,
	legacy: true,
	defaultPlacements: ["ausaddonbar-closebutton","spring"]
});
