Ext.define('MyApp.view.main.CustomerListController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.customerlistcontroller',


    
    //https://examples.sencha.com/extjs/7.0.0/examples/kitchensink/#actions-grid

    onSelectionChange: function(selectionMode, selections) {
        
        // GLOBAL EVENT FIRING 
        // (customerListToolBarController) listens for this
        // emits event with 3 objects:
        // 1. The controller object "customerlistcontroller"
        // 2. The object from the list which includes:
        //          a. data of the row
        //          b. previous row selected
        //          c. dirty, crudState, phantom, editing, etc.
        // 3. selections must be passed as well though it lands as undefined
        this.fireEvent('handleDetailAction', this, selections);

        
        
        // BUTTON TOGGLE 
        var detailAction = this.view.getAction('detailsAction');
           
        // Enable/disable Actions.
        // All widgets created from the Actions are affected.
        if (selections.length) {
            detailAction.enable();
        } else {
            detailAction.disable();
        }
    },

    handleDetailAction: function(){
        
        var rec = this.getView().getSelectionModel().getSelection()[0];


        // console.log("handleDetailAction has fired ")
        console.log(rec)
        if (rec) {
            Ext.Msg.alert('Details for '+ rec.get('title') + ' ' + rec.get('firstName') + ' ' + rec.get('lastName'),
            (
                'Specific Details: <br>' +
                'Client ID: ' + rec.get('customerId') + '<br>' +
                'Branch ID: ' + rec.get('branchId') + '<br>'
            )
            )
        }
    },

    getContextMenu: function() {
        return this.contextMenu || (this.contextMenu = this.view.add({
            xtype: 'menu',
            items: [
                // Actions can be converted into MenuItems
                '@detailsAction',
            ]
        }));
    },

    onGridContextMenu: function(view, rec, node, index, e) {
        // console.log(e);
        // console.log(rec);
        e.stopEvent();
        this.getContextMenu().show().setLocalXY(e.getXY());
        return false;
    },


});
