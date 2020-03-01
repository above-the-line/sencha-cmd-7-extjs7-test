Ext.define('MyApp.view.main.CustomerListToolBarController',{
    extend: 'Ext.app.ViewController',
    alias: 'controller.customerlisttoolbarcontroller',

    // Listening for events fired from a different
    //  event source / event domain
    listen: {
        controller: {
            // could have specified it specifically, 'customerlistcontroller',
            // instead used * selector to specify any originating controller
            '*': {
                handleDetailAction: 'onHandleDetailAction'
            }
        }
    },

    //not required, just here for readability
    customerSelection: {},

    // these are the 3 objects emitted by the customerListController
    onHandleDetailAction: function(controller, foriegnExecutionContext, selections){
        // console.log("This is the selection from CustomerListToolBarController")
        // console.log(selections)
        // console.log("This is the controller value passed in")
        // console.log(controller)
        // console.log("This is the 'this' value passed in")
        // console.log(foriegnExecutionContext[0].data)
        

        // assign the current selection to the customerSelection variable
        let databaseEntryForTargetCustomer = foriegnExecutionContext[0].data
        customerSelection = databaseEntryForTargetCustomer
    },

    // If you pass customerSelection as an argument to the function, it wont work
    // if you dont, it works.
    onCustomerDetailsClick: function(){
        console.log(customerSelection)
    },





    onNewCustomerClick: function(){
        Ext.create({
            xtype: 'addcustomerform',
            floating: true,
            closable: true,
            renderTo: Ext.getBody()
        });
        
    },
    




         // we also set up a listener for an application event here. 
        // We do this by using the on method on the application instance. 
        // Each controller has access to the application instance using the this.application reference
        // Instead of listening for the same view event in each of these controllers, 
        // only one controller listens for the view event and fires an application-wide event
        // that the others can listen for. This also allows controllers to communicate with
        // one another without knowing about or depending on each other’s existence.



        // this.application.on({
        //     stationstart: this.onStationStart,
        //     scope: this
        // });




    //     // if (rec) {
    //     //     console.log(rec)
    //     // }
    // }








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