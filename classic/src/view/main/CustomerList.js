Ext.define('MyApp.view.main.CustomerList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.customerlist',
  
    controller: 'customerlistcontroller', 

    requires: ['Ext.Action'],


    viewModel: {
        type: 'customerlist',
    },

    title: 'Customers who buy the most',

    height: 300,
    width: '100%',
    layout: {
        type: 'vbox',
        align: 'stretch'
    },

    dockedItems: [
    {  
        tbar:[
            // ACTION declared below CONVERTED INTO BUTTON
            '@detailsAction',

            // REGULAR BUTTON TOOLBAR
            {
                xtype: 'customerlisttoolbar', 
                dock: 'top',
                overflowHandler: 'menu'
            },
        ]
    }
    ],
 
    // This store is declared in the view model
    bind: '{customers}',

    columns: [
        // { text: 'CustomerID',  dataIndex: 'customerId', flex: .25 },
        // { text: 'Title', dataIndex: 'title', flex: .25 },
        { text: 'First Name', dataIndex: 'firstName', flex: 1 },
        { text: 'Last Name', dataIndex: 'lastName', flex: 1 }
    ],


    // // Clearing selection deisables the Actions
    allowDeselect: true,
    defaultActionType: 'button',
    actions: {
        // this is converted into a button above
        detailsAction: {
                iconCls: 'array-grid-buy-col',
                text: 'Details',
                disabled: true,
                handler: 'handleDetailAction'  // see CustomerListController
        }
    },

    // THIS IS REQUIRED FOR THE BUTTON 
    // // THAT EXECUTES ON A SELECTION MADE ON A ROW
    // THIS IS BAD STYLE:
    // IN MVC a component shouldn't know what controller uses it, 
    // but rather a controller should know what components it is using.
    // So you should really listen to the event in the controller, 
    // and fire an application event from the component.
    viewConfig: {
        listeners: {
            selection: function( aGrid, aRowIndex, aColIndex, aItem, aEvent, aRecord ) {
                this.application.fireEvent( 'testStart', aRecord )},
            selectionchange: 'onSelectionChange',
            itemcontextmenu: 'onGridContextMenu' 
        }
    },



    

  // NOTE THAT THE STORE IS NOT DEFINED ELSEWHERE
    // IT IS DEFINED AND INSTANTIATED HERE 
    // bind: {
    //     store: {
    //             model: 'MyApp.model.Customer',
    //             data: {
    //                 items: [
    //                     { MyApp.model.Customer.load(1) },
    //                     { MyApp.model.Customer.load(2) }
    //                 ]
    //             }
    //         },
    // },







    // plugins: {
    //     rowediting: {
    //         listeners: {
    //             // edit: 'onEditComplete'
    //         }
    //     }
    // },

   
});
