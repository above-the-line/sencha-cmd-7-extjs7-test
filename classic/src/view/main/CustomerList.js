Ext.define('MyApp.view.main.CustomerList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.customerlist',
  
    controller: 'customerlistcontroller', 

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

    dockedItems: [{
        xtype: 'customerlisttoolbar',
        dock: 'top',
        overflowHandler: 'menu'
    }],
 
    bind: '{customers}',

    columns: [
        { text: 'CustomerID',  dataIndex: 'customerId', flex: .25 },
        { text: 'Title', dataIndex: 'title', flex: .25 },
        { text: 'First Name', dataIndex: 'firstName', flex: 1 },
        { text: 'Last Name', dataIndex: 'lastName', flex: 1 }
    ],



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





    // BELOW IS FOR iTUNES JSON FEED
    // columns: [
    //     { text: 'CustomerID',  dataIndex: 'id', flex: .25 },
    //     { text: 'Title', dataIndex: 'movie', flex: .25 },
    // ],

   
});
