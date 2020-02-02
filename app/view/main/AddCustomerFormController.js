/*
As we are
going to use a file upload capability, we will need to send the form information using
the Ajax submit, and that is why we need to set a name configuration for each field.
To avoid having to set the values of the form manually, we are going to use data
binding from the ViewModel. 

We will set a variable named currentUser
in the ViewModel that will refer to the current selected row of the UsersGrid.
Then, we have a combobox. When working with comboboxes, we need to set a
Store to feed the information to it. In this case, we will bind, the store of this
combobox, with Store groups from the ViewModel. 

The Store can represent a Model that has different fields. We can specify
which field from the Model will be used as an internal value and which field
will be displayed to the user.

We have three values bound; the store that we already mentioned (#16); the value, which
refers to the groups_id foreign key (#15) of the User Model and the selection
(#17), which will refer to the group object from the User Model (referring to the
Group selected).
*/




Ext.define('MyApp.view.AddCustomerFormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.addcustomerformcontroller',

    requires: [
        'MyApp.model.AddCustomerFormModel',
        'MyApp.model.Customer',
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

                value = encode(value);
                
                s += Ext.util.Format.format("{0} = {1}<br />", key, value);

                formResponses[key] = value;

            }, this);
        }

        console.log(formResponses);

        let restPayload = Ext.create('MyApp.model.Customer', {
            "branchId": "1",
            "customerId": formResponses["customerId"],
            "title": formResponses["title"],
            "firstName": formResponses["firstName"],
            "lastName": formResponses["lastName"],
        })
        

        


        console.log(restPayload.getProxy().getUrl());
        
        
        console.log(restPayload);


        // nifty way to inject values
        // restPayload.set('customerId', formResponses["customerId"])
        
        // If not true it will add id during POST
        // restPayload.phantom=true;



        // you should either use another idproperty or rename your id so that an implicit id is used by the framework (internal id).

        // The dirty/phantom would then work and posting would include the user id in data, but not as the key of the record.



        
        console.log("================")
        console.log("================")
        console.log("End of Controller Script")
        // restPayload.setappendId(false);
        restPayload.save({
            success: function(){
                console.log("Updated OK from AddCustomerFormController")
            },
            failure: function(){
                callrestPayload.sync()
            }
        })

    },

    
    // createDialog: function(record){

    //     view = this.getView();

    //     this.dialog = view.add({
    //         xtype: 'addcustomerform',
    //         floating: true,
    //         closable: true,
    //         viewModel: {
    //             data: {
    //                 title: record ? 'Edit: ' + record.get('name') : 'Add User'},
                
    //         }
    //     })
    // },
    


    // THIS DOESN'T WORK BUT IS CLOSE TO

    // let restPayload = Ext.create('MyApp.model.Customer', {
    //     customerId: formResponses[customerId],
    //     customerTitle: formResponses[title],
    //     customerFirstName: formResponses[firstName],
    //     customerLastName: formResponses[lastName],
    //  })

    //  restPayload.save()

    
    // form.submit();
               













    // send message to andy this week.


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