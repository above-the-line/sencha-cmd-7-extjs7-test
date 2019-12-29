// NOTE THAT THE CUSTOMER STORE IS NOT DEFINED IN ./app/store/Customer.js 
// INSTEAD IT IS DEFINED AND BOUND IN ONE STEP WHEN THE VIEW COMPONENT IS DEFINED.

Ext.define('MyApp.model.Customer', {
    alias: 'model.Customer',
    extend: 'Ext.data.Model',
    

    // changeName: function() {
    //     var oldName = this.get('customerFirstName'),
    //         newName = oldName + " The Barbarian";

    //     this.set('customerFirstName', newName);
    // },


    fields: [{
        name: 'customerId',
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
   
    proxy: {
        type: 'rest',
        url: 'http://45.76.116.27/ARESAPI/customers/2',
        reader: {
            type: 'json',
           }
    }





    // BELOW IS FOR iTUNES JSON FEED
    // fields: [{
    //     name: 'id',
    //     mapping: 'id.attributes["im:id"]'
    // }, {
    //     name: 'movie',
    //     mapping: '["im:name"].label'
    // }],
    // proxy: {
    //     type: 'jsonp',
    //     url: 'https://itunes.apple.com/us/rss/topmovies/limit=5/json',
    //     reader: {
    //         type: 'json',
    //         rootProperty: 'feed.entry'
    //        }
    // }
});

