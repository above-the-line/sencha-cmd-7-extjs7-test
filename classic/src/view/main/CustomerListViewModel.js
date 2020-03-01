/*
Now we are configuring ViewModel to load data from a store
that we are declaring and creating at the same time. 
The Store "customers" is a collection of the Model "Customer", 
and we are also asking the Store to load automatically.
*/


Ext.define('MyApp.view.main.CustomerListViewModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.customerlist',

    stores: {
        customers: {
            model: 'Customer',
            // Without autoload: 'true' data will be called but not loaded into the store
            // autoLoad: true,
            data: [
                MyApp.model.Customer.load(1),
                MyApp.model.Customer.load(2),
                MyApp.model.Customer.load(4),
                MyApp.model.Customer.load(5),
            ],        
        },
        
    },



})