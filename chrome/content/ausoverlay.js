Components.utils.import("chrome://ausaddonbar/content/aus_toolbars.jsm");
var addonBarteo = {

	prefs: Services.prefs.getBranch("extensions.ausaddonbar."),

	init: function() {
		window.removeEventListener('load', addonBarteo.init, false);

		Components.utils.import('resource://gre/modules/AddonManager.jsm');
		AddonManager.getAddonByID('ausaddonbar@teo.pl', function(addon) {
			let prevVersion = addonBarteo.prefs.getCharPref('lastVersion');
			if (Services.vc.compare(prevVersion, addon.version) < 0) {
				if((navigator.userAgent.search(/Firefox/gi)>0)) {
					let url = 'chrome://ausaddonbar/content/update.xhtml';
					gBrowser.selectedTab = gBrowser.addTab(url);
					addonBarteo.prefs.setCharPref('lastVersion', addon.version);
				}
			}
		});
	},

	toggleAddonBar: function() {
		let addonBar = document.getElementById('addonbarteo-addon-bar');
		setToolbarVisibility(addonBar, addonBar.collapsed);
		gBrowser.updateWindowResizers();
	}
}

window.addEventListener("load", addonBarteo.init, false);
