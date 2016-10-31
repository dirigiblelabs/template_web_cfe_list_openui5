sap.ui.define(['jquery.sap.global', 'sap/ui/core/mvc/Controller', 'sap/ui/model/json/JSONModel'],
	function(jQuery, Controller, JSONModel) {
		"use strict";

		return Controller.extend("io.dirigible.templates.list.${tableName}.Table", {

			onInit: function () {
				// set explored app's demo model on this sample
				var oModel = new JSONModel();
				oModel.loadData("${serviceFileName}");
				this.getView().setModel(oModel);
			}
		});
});
