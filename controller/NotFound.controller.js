sap.ui.define([
		"com/sap/grc/dpp/mainapp/controller/BaseController"
	], function (BaseController) {
		"use strict";

		return BaseController.extend("com.sap.grc.dpp.mainapp.controller.NotFound", {

			/**
			 * Navigates to the worklist when the link is pressed
			 * @public
			 */
			onLinkPressed : function () {
				this.getRouter().navTo("worklist");
			}

		});

	}
);