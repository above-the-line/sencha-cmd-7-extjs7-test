Ext.define('MyApp.view.main.CustomerListToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.customerlisttoolbar',
    controller: 'customerlistcontroller',
    items: [
        {
        xtype: 'button',
        iconCls: 'x-fa fa-plus-square',
        text: 'New Customer',
        handler: 'onNewCustomerClick'
        }
        ,
        {
        xtype: 'button',
        iconCls: 'x-fa fa-trash',
        text: 'Delete Customer',
        handler: 'onDeleteCustomerClick'
        }
    ]
});