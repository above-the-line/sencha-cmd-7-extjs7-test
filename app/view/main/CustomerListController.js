Ext.define('MyApp.view.main.CustomerListController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.customerlistcontroller',

    onNewCustomerClick: function(){
        Ext.create({
            xtype: 'addcustomerform',
            floating: true,
            closable: true,
            renderTo: Ext.getBody()
        });
       
    

    }








    // WORKING NOTIFICATION POPUP
    // onNewCustomerClick: function() {
    //     Ext.Msg.prompt('Add a new Customer', 'Are you sure you want to do that?', );
    //     Ext.Msg.maskClickAction = this.getMaskClickAction();
    // },

    // getMaskClickAction: function() {
    //     return this.lookupReference('hideOnMaskClick').getValue() ? 'hide' : 'focus';
    // },

    // onPromptClick: function() {
    //     Ext.MessageBox.prompt('Name', 'Please enter your name:', this.showResultText, this);
    //     Ext.MessageBox.maskClickAction = this.getMaskClickAction();
    // },







    // ORIGINAL CODE FROM KITCHEN SINK
    // onConfirmClick: function() {
    //     Ext.MessageBox.confirm('Confirm', 'Are you sure you want to do that?', this.showResult, this);
    //     Ext.MessageBox.maskClickAction = this.getMaskClickAction();
    // },

   
    // showResult: function(btn, text) {
    //     this.showToast(Ext.String.format('You clicked the {0} button', btn));
    // },

    // showResultText: function(btn, text) {
    //     this.showToast(Ext.String.format('You clicked the {0} button and entered the text "{1}".', btn, text));
    // },

    // showToast: function(s, title) {
    //     Ext.toast({
    //         html: s,
    //         closable: false,
    //         align: 't',
    //         slideInDuration: 400
    //         // ,
    //         // minHeight: 1
    //     });
    // },

    // destroy: function() {
    //     if (this.timer) {
    //         window.clearTimeout(this.timer);
    //     }

    //     Ext.Msg.hide();
    //     this.callParent();
    // }



});