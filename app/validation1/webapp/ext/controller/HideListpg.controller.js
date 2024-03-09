sap.ui.define(['sap/ui/core/mvc/ControllerExtension'], function (ControllerExtension) {
	'use strict';

	return ControllerExtension.extend('validation1.ext.controller.HideListpg', {
		// this section allows to extend lifecycle hooks or hooks provided by Fiori elements
		override: {
			/**
             * Called when a controller is instantiated and its View controls (if available) are already created.
             * Can be used to modify the View before it is displayed, to bind event handlers and do other one-time initialization.
             * @memberOf validation1.ext.controller.HideListpg
             */
			onInit: function () {
				// you can access the Fiori elements extensionAPI via this.base.getExtensionAPI
				var oModel = this.base.getExtensionAPI().getModel();
			},
			routing:{
				onBeforeBinding:function(){
					debugger
					MessageToast.show("ON before binding TRIGGERED PP");
				},
				onAfterBinding:function(){
					debugger
					MessageToast.show("ON after binding TRIGGERED PP");
				}
			},
			editFlow:{
				
				onBeforeDelete:function(){
					debugger
					MessageToast.show("ON BEFORE delete TRIGGERED PP");
				},
				onAfterDelete:function(){
					debugger
					MessageToast.show("ON after delete TRIGGERED PP");
				},
				onBeforeCreate:function(){
					debugger
					MessageToast.show("ON BEFORE create TRIGGERED PP");
				},
				onAfterCreate:function(){
					debugger
					MessageToast.show("ON after create TRIGGERED PP");
				},
				onBeforeSave:function(oEvent){
					debugger
					MessageToast.show("ON BEFORE SAVE TRIGGERED PP");
				},
				onAfterSave:function(oEvent){
					debugger
					MessageToast.show("ON AFTER SAVE TRIGGERED PP");
				},
				
				onBeforeEdit:function(){
					debugger
					MessageToast.show("ON BEFORE EDIT TRIGGERED PP");

				},
				onAfterEdit:function(){
					debugger
					MessageToast.show("ON AFTER EDIT TRIGGERED PP");
				},
				onBeforeDiscard:function(){
					debugger
					MessageToast.show("ON BEFORE discard TRIGGERED PP");
				},
				onAfterDiscard:function(){
					debugger
					MessageToast.show("ON after discard TRIGGERED PP");
				}
		}
			
		
		}
	});
});
