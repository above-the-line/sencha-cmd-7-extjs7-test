Ext.define('MyApp.view.main.CustomerListViewController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.customerlistcontroller',

    
    onNewCustomerClick: function(){
        Ext.create({
            xtype: 'addcustomerform',
            floating: true,
            closable: true,
            renderTo: Ext.getBody()
        });
    
    
    },

   

    

})