Ext.define('MyApp.model.AddCustomerFormModel', {
    extend: 'MyApp.model.Base',
    fields: [
        { name: 'customerId', type: 'string' },
        { name: 'title', type: 'string' },
        { name: 'firstName', type: 'string' },
        { name: 'lastName', type: 'string' },
        { name: 'phone-1', type: 'string' },
        { name: 'phone-2', type: 'string' },
        { name: 'phone-3', type: 'string' },       
        { name: 'dateOfBirth', type: 'date' }
    ]
});