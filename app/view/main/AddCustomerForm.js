/**
 * The FieldContainer\'s child items are arranged like in any other container, using the
 * layout configuration property. In this example, each FieldContainer is set to use an
 * HBox layout.
 *
 * FieldContainers can be configured with the combineErrors option, which combines errors
 * from the sub fields and presents them at the container level. In this example the
 * Availability, Phone and Full Name items have this option enabled, and the Time worked
 * item does not.
 */
Ext.define('MyApp.view.main.AddCustomerForm', {
    extend: 'Ext.form.Panel',
    alias: 'widget.addcustomerform',
    controller: 'addcustomerformcontroller',
    viewModel: '',

    // profiles: {
    //     classic: {
    //         width: 600,
    //         phone1Width: 45,
    //         phone2Width: 45,
    //         phone3Width: 60,
    //         titleWidth: 75,
    //         empLabelWidth: 100,
    //         detailsLabelWidth: 90,
    //         numberfieldWidth: 95
    //     },
    //     neptune: {
    //         width: 600,
    //         phone1Width: 45,
    //         phone2Width: 45,
    //         phone3Width: 60,
    //         titleWidth: 75,
    //         empLabelWidth: 100,
    //         detailsLabelWidth: 90,
    //         numberfieldWidth: 95
    //     },
    //     graphite: {
    //         width: 800,
    //         phone1Width: 55,
    //         phone2Width: 55,
    //         phone3Width: 70,
    //         titleWidth: 100,
    //         empLabelWidth: 130,
    //         detailsLabelWidth: 120,
    //         numberfieldWidth: 95
    //     },
    //     'classic-material': {
    //         width: 600,
    //         phone1Width: 150,
    //         phone2Width: 150,
    //         phone3Width: 150,
    //         titleWidth: 150,
    //         empLabelWidth: 130,
    //         detailsLabelWidth: 120,
    //         numberfieldWidth: 150
    //     }
    // },
    title: 'Add New Customer',

    width: 600,
    height: 345,
    
    bodyPadding: 10,

    // FORM LEVEL SETTINGS
    defaults: {
        anchor: '100%',
        labelWidth: 100
    },

    // FORM LEVEL ITEMS
    items: [
        // THERE ARE 2 SEGMENTS TO THIS FORM
        // AN "ABOVE THE LINE" LIST OF ROWS (DATA ENTRY FIELDS)
        // AND A "BELOW THE LINE" (COLLAPSIBLE) SEGMENT
        // BOTH SEGMENTS ARE DECLARED WITHIN THIS ONE ITEMS LIST  
        // 
        // 
        // WHENEVER A ROW HAS MULTIPLE DATA ENTRY FIELDS ON THE SAME ROW
        // IT ENCAPSULATES ITS NESTED ITEMS IN ITS OWN CONTAINER
        // 
        // 
        // An encapsulating container
        {
            xtype: 'fieldcontainer',
            fieldLabel: 'Customer ID',
            combineErrors: true,
            msgTarget: 'under',
            layout: 'hbox',    // This makes the items float to span the row (parade style) not stack
            closable: true,
            defaults: {
                // flex: 1,    // If this was on, the field size would be overridden and would span the whole row
                hideLabel: true,
                enforceMaxLength: true,
                maskRe: /[0-9.]/
            },
            items: [{
                xtype: 'textfield', 
                fieldLabel: 'Customer ID',
                // bind: '{currentCustomer.customerId}',
                name: 'customerId',
                width: 45,
                allowBlank: false,
                maxLength: 3 
            }] 
        },
        
        // An encapsulation container - for a row that has multiple fields
        {
            xtype: 'fieldcontainer',
            combineErrors: true,
            msgTarget: 'side',
            layout: 'hbox',
            fieldLabel: 'Full Name',
            defaults: {
                hideLabel: true,
                margin: '0 5 0 0',
                },
                items: [
                    // 3 fields on one row
                    {
                        width: 75,
                        xtype: 'combo',
                        queryMode: 'local',
                        value: 'mrs',
                        triggerAction: 'all',
                        forceSelection: true,
                        editable: false,
                        fieldLabel: 'Title',
                        name: 'title',
                        // bind: '{currentCustomer.customerTitle}',
                        displayField: 'name',
                        valueField: 'value',
                        store: {
                            fields: ['name', 'value'],
                            data: [
                                { name: 'Mr', value: 'mr' },
                                { name: 'Mrs', value: 'mrs' },
                                { name: 'Miss', value: 'miss' }
                            ]
                        }
                    }, 
                    {
                        xtype: 'textfield',
                        flex: 0.5,
                        name: 'firstName',
                        // bind: '{currentCustomer.customerFirstName}',
                        fieldLabel: 'First',
                        allowBlank: false
                    }, 
                    {
                        xtype: 'textfield',
                        flex: 0.5,
                        name: 'lastName',
                        // bind: '{currentCustomer.customerLastName}',
                        fieldLabel: 'Last',
                        allowBlank: false
                    },  
                ],          
        },


        // COLLAPSIBLE SEGMENT 
        {
            xtype: 'fieldset',
            title: 'Details',
            collapsible: true,
            defaults: {
                labelWidth: 90,
                anchor: '100%',
                layout: 'hbox'
            },
            items: [
                {
                    xtype: 'fieldcontainer',
                    fieldLabel: 'Phone',
                    combineErrors: true,
                    msgTarget: 'under',
                    defaults: {
                        hideLabel: true,
                        enforceMaxLength: true,
                        maskRe: /[0-9.]/
                    },
                    items: [
                        { xtype: 'displayfield', value: '(', margin: '0 2 0 0' },
                        { xtype: 'textfield', fieldLabel: 'Phone 1', name: 'phone-1', width: 45, allowBlank: false, maxLength: 3 },
                        { xtype: 'displayfield', value: ')', margin: '0 5 0 2' },
                        { xtype: 'textfield', fieldLabel: 'Phone 2', name: 'phone-2', width: 45, allowBlank: false, margin: '0 5 0 0', maxLength: 3 },
                        { xtype: 'displayfield', value: '-' },
                        { xtype: 'textfield', fieldLabel: 'Phone 3', name: 'phone-3', width: 60, allowBlank: false, margin: '0 0 0 5', maxLength: 4 }
                    ]
                },
                {
                    xtype: 'fieldcontainer',
                    fieldLabel: 'Date of Birth',
                    combineErrors: false,
                    defaults: {
                        hideLabel: true,
                        margin: '0 5 0 0'
                },
                items: [
                    {
                        xtype: 'datefield',
                        name: 'dateOfBirth',
                        fieldLabel: 'Date of Birth',
                        allowBlank: false
                    }
                ]
            }
            ] // ITEMS OF THE COLLAPSIBLE SEGMENT
        } // COLLAPSIBLE SEGMENT OBJECT
    ], // FORM LEVEL ITEMS
        

   
    

    buttons: [{
        text: 'Load test data',
        handler: 'onLoadClick'
    }, {
        text: 'Save',
        handler: 'onSaveClick'
    }, {
        text: 'Reset',
        handler: 'onResetClick'
    }, 

    ]
});






