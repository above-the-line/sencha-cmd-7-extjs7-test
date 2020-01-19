// Ext.define('MyApp.store.Customer', {
//     extend: 'Ext.data.Store',

//     alias: 'store.customer',

//     model: 'MyApp.model.Customer',

//     proxy: {

//         type: 'rest',
//         url: 'http://45.76.116.27/ARESAPI/customers/',
        
//         reader: {
//             type: 'json',
//             rootProperty: ''
//         },
        
//     },
    
//     data: [
//         MyApp.model.Customer.load(1),
//         MyApp.model.Customer.load(2)
//     ],
    
   





    // fields: [{
    //     name: 'customerId',
    //     idProperty: 'customerId',
    //     type: 'string',
    //     mapping: 'customerId'
    // }, {
    //     name: 'customerTitle',
    //     type: 'string',
    //     mapping: 'title'
    // }, {
    //     name: 'customerFirstName',
    //     type: 'string',
    //     mapping: 'firstName'
    // }, {
    //     name: 'customerLastName',
    //     type: 'string',
    //     mapping: 'lastName'
    // }],

    // MyApp.model.Customer.load(1, {
    //     callback: function(user) {
    //         console.log('customerFirstName: ' + Customer.get('customerFirstName'));
    
    //         user.posts(function(posts){
    //             posts.each(function(post) {
    //                 console.log('Post: ' + post.get('title'));
    //             });
    //         });
    //     }
    // });











// });