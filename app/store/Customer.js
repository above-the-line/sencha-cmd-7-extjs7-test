Ext.define('MyApp.store.Customer', {
    extend: 'Ext.data.Store',

    alias: 'store.customer',

    model: 'MyApp.model.Customer',

    proxy: {

        type: 'rest',
        url: 'http://45.76.116.27/ARESAPI/customers/1',
        
        reader: {
            type: 'json',
            rootProperty: ''
        },
        autoload: true
    },

   
});