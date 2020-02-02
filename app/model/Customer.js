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

    // config: {
        fields: [{
            name: 'branchId',
            idProperty: 'branchId',
            type: 'int',
            mapping: "branchId"
        }, {
            name: 'customerId',
            idProperty: 'customerId',
            type: 'string',
            mapping: "customerId",
            // persist: false,
        }, {
            name: 'title',
            type: 'string',
            mapping: "title"
        }, {
            name: 'firstName',
            type: 'string',
            mapping: "firstName"
        }, {
            name: 'lastName',
            type: 'string',
            mapping: "lastName"
        }],
        
        
        // Create the store
        proxy: {
            type: 'rest',
            url: 'http://45.76.116.27/ARESAPI/customers',
            
            
            // clientIdProperty: 'customerId',
            // idProperty: 'customersId',
            // Xhr if using CORS set to false
            // useDefaultXhrHeader:true,
            // writeAllFields: false,

            // stops _dc parameter (disable caching - set the ) being added to end of query
            noCache: false,
            // stops all ids being sent in header
            appendId: true, 
           
            // writeRecordId: false,
            // paramsAsJson: true,

            // Without this create is not POST
            actionMethods:{
                create: 'POST',
                read: 'GET',
                update: 'PUT',
                destroy: 'DELETE'
            },

            // UNIQUE CRUD URLS
            // api: {
            //     read: 'http://45.76.116.27/ARESAPI/customers/',
            //     create : 'http://45.76.116.27/ARESAPI/customers',
            //     update: 'http://45.76.116.27/ARESAPI/customers',
            // }, 

            reader: {
                type: 'json',
                // rootProperty: '',
            },

            writer: {
                type: 'json',
                // rootProperty: 'data',
                // writeRecordId: false,
                // disableCaching: false,   
                // appendId: false,
                // allowSingle: true,
                // custom name for the auto generated id property
                // clientIdProperty: 'customerId',
                // idParam: 'customerId',
                proxy: {
                    // IdProperty: 'customerId',
                    appendId: false,
                    
                    listeners: {
                        exception: function(proxy, response, operation){  
                            
                        console.log(response);
                        }
                    }      
                },
            },

             
             // changes: true -> Only include modified fields (default)
             // critical: true -> Always include “critical” fields, regardless of change (default)
             // associated: true -> Include association data
            //  partialDataOptions: {
            //      changes: false, 
            //      critical: true,
            //      associated: true
            //  },

            listeners: {
                exception: function(proxy, response, operation){  
                    console.log(response);
                }
            }
        } //proxy
    // }// config

});

