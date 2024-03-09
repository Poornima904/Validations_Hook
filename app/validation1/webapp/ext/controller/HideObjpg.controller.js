sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('validation1.ext.controller.HideObjpg', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf validation1.ext.controller.HideObjpg
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			routing:{
				onBeforeBinding:function(){
					debugger
					// without using id
					// this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[4].setEnabled(false);
					// this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[4].setVisible(false);
					// this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[4].destroy();

					// sap.ui.getCore().byId("validation1::CustomerObjectPage--fe::StandardAction::Edit").mProperties.visible(false) ==not working

					// using perticular id of edit button
					// sap.ui.getCore().byId("validation1::CustomerObjectPage--fe::StandardAction::Edit").setVisible(false);
					// sap.ui.getCore().byId("validation1::CustomerObjectPage--fe::StandardAction::Edit").setEnabled(false);
					// sap.ui.getCore().byId("validation1::CustomerObjectPage--fe::StandardAction::Edit").destroy();
					
					
				},
				// HIDING EDIT BUTTON FOR ALL ROWS IN OBJECT PAGE 
				// onAfterBinding:function(){
				// 	debugger
				// 	this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[4].setEnabled(false);
				// 	this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[4].setVisible(false);
				// 	this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[4].destroy();

				// 	// without using id ob edit buttton
				// 	// 	sap.ui.getCore().byId("validation1::CustomerObjectPage--fe::StandardAction::Edit").setVisible(false);
				// // 	sap.ui.getCore().byId("validation1::CustomerObjectPage--fe::StandardAction::Edit").setEnabled(false);
					
				// }
				onAfterBinding: function() {
					// HIDING EDIT BUTTON FOR EVEN NUMBER PRESENT IN PRIMARY KEY
					debugger
					let path = sap.ui.getCore().byId("validation1::CustomerObjectPage--fe::FacetSection::GeneratedFacet1-innerGrid").mAggregations.content[0].oPropagatedProperties.oBindingContexts.undefined.sPath
					// Define the string


					// Find the index of 'cust_id='
					var startIndex = path.indexOf('cust_id=');

					// If 'cust_id=' is found in the string
					if (startIndex !== -1) {
    				// Move the index to the position after 'cust_id='
    				startIndex += 'cust_id='.length;

    				// Find the end index of the number
    				var endIndex = path.indexOf(',', startIndex);
    				if (endIndex === -1) {
        			// If ',' is not found, the number continues until the end of the string
        			endIndex = path.length - 1;
    				}	

    				// Extract the substring containing the number
    				var custIdValue = path.substring(startIndex, endIndex + 1);

    				// Trim any whitespace from the extracted substring
    				custIdValue = custIdValue.trim();
									debugger
					if(custIdValue[0]%2 == 0){
						this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[4].setEnabled(false);
						this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[4].setVisible(false);
						// this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[4].destroy();
					}else{
						this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[4].setEnabled(true);
						this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[4].setVisible(true);
						// this.getView().getContent()[0].getHeaderTitle().mAggregations._actionsToolbar.getContent()[4].destroy();

					}
					} 
				}
			},
			onBeforeEdit:function(){
				debugger
			},
			onAfterEdit:function(){
			debugger
			}

			
		
		}
	});
});
