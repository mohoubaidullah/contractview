/* global QUnit*/

sap.ui.define([
	"sap/ui/test/Opa5",
	"zsd/contractview/test/integration/pages/Common",
	"sap/ui/test/opaQunit",
	"zsd/contractview/test/integration/pages/contractview",
	"zsd/contractview/test/integration/navigationJourney"
], function (Opa5, Common) {
	"use strict";
	Opa5.extendConfig({
		arrangements: new Common(),
		viewNamespace: "zsd.contractview.view.",
		autoWait: true
	});
});