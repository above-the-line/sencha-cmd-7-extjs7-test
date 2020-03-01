Ext.define('MyApp.view.main.CustomerListToolbar', {
    extend: 'Ext.toolbar.Toolbar',
    alias: 'widget.customerlisttoolbar',
    controller: 'customerlisttoolbarcontroller',
    store: {
        type: 'personnel'
        },
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
        ,
        {
        xtype: 'button',
        iconCls: 'x-fa fa-book',
        text: 'Customer Details',
        handler: 'onCustomerDetailsClick'
        }
        ,
        {
        padding: '0 0 0 30',
        xtype: 'combo',
        valueField: 'name',
        displayField: 'name',
        queryMode: 'remote',
        autoSelect: true,
        typeAhead: true,
        typeAheadDelay:0,
        forceSelection: true,
        name: 'Search_Customers',
        fieldLabel: 'Find Customer',
        store: {
            type: 'personnel'
            },
        allowBlank: false,
        anyMatch: true,
        disabled: false,
        minChars: 0
        }
    ]
});