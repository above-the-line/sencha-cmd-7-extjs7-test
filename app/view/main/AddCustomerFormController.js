Ext.define('MyApp.view.AddCustomerFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.addcustomerformcontroller',

    requires: [
        'MyApp.model.AddCustomerFormModel',
        'MyApp.model.Customer'
    ],

    onLoadClick: function() {
        this.getView().loadRecord(Ext.create('MyApp.model.AddCustomerFormModel', {
            'customerId': '7',
            'title': 'mrs',
            'firstName': 'Julia',
            'lastName': 'Axelrod',
            'dateOfBirth': '01/10/1980',
            'phone-1': '041',
            'phone-2': '348',
            'phone-3': '4567',
        }));
    },

    onSaveClick: function(){
        var form = this.getView(),
        encode = Ext.String.htmlEncode,
        s = '';
        let formResponses = {};

        if (form.isValid()) {
            Ext.iterate(form.getValues(), function(key, value) {

                // value = encode(value);
                
                // s += Ext.util.Format.format("{0} = {1}<br />", key, value);

                formResponses[key] = value;
            }, this);
        }
        console.log(formResponses);

        let restPayload = Ext.create('MyApp.model.Customer', {
           customerId: formResponses[customerId],
           customerTitle: formResponses[title],
           customerFirstName: formResponses[firstName],
           customerLastName: formResponses[lastName],
        })

        restPayload.save()

    },

    // ORIGINAL METHOD FROM THE KITCHEN SINK EXAMPLE
    // onSaveClick: function() {
    //     var form = this.getView(),
    //         encode = Ext.String.htmlEncode,
    //         s = '';

    //     if (form.isValid()) {
    //         Ext.iterate(form.getValues(), function(key, value) {
    //             value = encode(value);

    //             s += Ext.util.Format.format("{0} = {1}<br />", key, value);
    //         }, this);

    //         Ext.Msg.alert('Form Values', s);
    //     }
    // },

    onResetClick: function() {
        this.getView().reset();
    },

});