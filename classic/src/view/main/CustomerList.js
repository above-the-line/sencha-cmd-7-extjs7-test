Ext.define('MyApp.view.main.CustomerList', {
    extend: 'Ext.grid.Panel',
    alias: 'widget.customerlist',

    title: 'GET Customers from ARES API',

    // NOTE THAT THE STORE IS NOT DEFINED ELSEWHERE
    // IT IS DEFINED AND INSTANTIATED HERE 
    bind: {
        store: {
                model: 'MyApp.model.Customer',
                autoLoad: true
            },
    },

    height: 200,

    dockedItems: [{
        xtype: 'customerlisttoolbar',
        dock: 'top',
        overflowHandler: 'menu'
    }],
 
    columns: [
        { text: 'CustomerID',  dataIndex: 'customerId', flex: .25 },
        { text: 'Title', dataIndex: 'title', flex: .25 },
        { text: 'First Name', dataIndex: 'customerFirstName', flex: 1 },
        { text: 'Last Name', dataIndex: 'customerLastName', flex: 1 }
    ],

    // BELOW IS FOR iTUNES JSON FEED
    // columns: [
    //     { text: 'CustomerID',  dataIndex: 'id', flex: .25 },
    //     { text: 'Title', dataIndex: 'movie', flex: .25 },
    // ],

   
});
