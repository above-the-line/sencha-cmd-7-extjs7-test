// NOTE THAT THE CUSTOMER STORE IS NOT DEFINED IN ./app/store/Customer.js 
// INSTEAD IT IS DEFINED AND BOUND IN ONE STEP WHEN THE VIEW COMPONENT IS DEFINED.

    // 
    // The Model represents the data we want to manipulate. It is a representation of the
    // tables we have in the database. A Model instance represents a single data row of
    // a table. The Store will be responsible for loading the collection of models from the
    // server. A Store is usually bound to a View. A View is the component with which
    // the user is seeing the screen (we have created a few so far; for example, a GridPanel
    // provides a visual representation of data found in a Store.). And the Controller is
    // what keeps everything together. The Controller will capture the events from the
    // View and will execute some logic based on it. The Controller can also redirect the
    // logic to the Model or the Store, making all the pieces communicate with each other,
    // behaving like a mediator. 
    // 
    // Since every customer is going to be a separate call to the database, a new
    // model (model instance) will be created for each row that is being shown
    // in the customer's table. Each row will be created by the template defined in the model
    // less words
    // 


Ext.define('MyApp.model.Customer', {
    alias: 'model.Customer',
    extend: 'Ext.data.Model', 

    // changeName: function() {
    //     var oldName = this.get('customerFirstName'),
    //         newName = oldName + " The Barbarian";
    //     this.set('customerFirstName', newName);
    // },

    idProperty: 'customerId',

    fields: [{
        name: 'customerId',
        idProperty: 'customerId',
        type: 'string',
        mapping: 'customerId'
    }, {
        name: 'customerTitle',
        type: 'string',
        mapping: 'title'
    }, {
        name: 'customerFirstName',
        type: 'string',
        mapping: 'firstName'
    }, {
        name: 'customerLastName',
        type: 'string',
        mapping: 'lastName'
    }],

    // 
    // Since we want to shorten the amount we type
    // we can define a schema which specifies a namespace
    // 
    // schema: {
    //     namespace: 'MyApp.model.Customer',  //so auto generated customers will appear as MyApp.model.Customer.1
        proxy: {
            type: 'rest',
            idParam: 'customerId',
            api: {
                create : '/'
            },
            url: 'http://45.76.116.27/ARESAPI/customers/',
            reader: {
                type: 'json',
                rootProperty: ''
            },
            // There is no error handling here, if the 
            // request fails then nothing will display in the store
            // and the store will stop displaying at the point
            // of the first failure
            listeners: {
                exception: function(proxy, response, operation){  
                    console.log(response);
                }
            }
        }
    // }//schema

 


});

