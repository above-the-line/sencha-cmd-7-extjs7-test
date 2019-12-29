// THIS IS A GAUGE COMPONENT NOT A GAUGE CHART
// THIS IS EXT.UX.GAUGE.GAUGE

Ext.define('MyApp.view.WebSalesGauge', {
    extend: 'Ext.Panel',
    alias: 'widget.needle-gauge',
    controller: 'anchored-tooltips',    

    requires: [
        'Ext.ux.gauge.Gauge',
        'Ext.ux.gauge.needle.Spike'
    ],

    // title: 'test2',
    ui: 'light',
    width: '100%',
    height: 190,
    
    // layout: {
    //     type: 'hbox',
    //     align: 'stretch'
    // },

    // bbar: [
    //     {
    //     xtype: 'textfield',
    //     name: 'Total',
    //     fieldLabel: 'Total',
    //     allowBlank: false 
    //     }
    // ],

    viewModel: {
        data: {
            value: 30
        },
    },

    // html: [{
    //     'salesTest'
    // }],


    items: [{
        reference: 'webSalesGauge',
        xtype: 'gauge',
        flex: 1,
        
        colors: ['#1F6D91', '#90BCC9'],
        bind: '{value}',
        
        // radiusFactor: 1,
        
        textOffset: {
            dy: 45
        },
        needle: {
            type: 'spike',
            outerRadius: '70%',
            innerRadius: '0%'
        },

        // label: {
        //     text: 'Websales',
        //     zindex: '10'
        // }
    }],



// WORKING BOTTOM BUTTON 

    // dockedItems: [{
    //     xtype: 'toolbar',
    //     dock: 'bottom',
    //     // ui: 'footer',
    //     layout: {
    //         // align: 'middle',
    //         pack: 'center',
    //         // type: 'hbox'
    //     },


    //     defaults: {
    //         // minWidth: 200
    //     },
    //     items: [
    //         // { xtype: 'component', flex: 1 },
    //         // { xtype: 'button', text: 'Button 1' },
    //         {text: 'Today Web Sales v All Time High'}
    //     ]
    // }]


    // BOTTOM BAR
    // dockedItems: [{
    //     xtype: 'toolbar',
    //     dock: 'bottom',
    //     items: [
    //         { xtype: 'button', text: 'Button 1' }
    //     ]
    // }]


});



// OLD
    // items: [{
    //     reference: 'webSalesGauge',
    //     xtype: 'gauge',
    //     colors: ['#1F6D91', '#90BCC9'],
    //     flex: 1,
    //     radiusFactor: 10,
    //     bind: '{value}',
    //     needle: 'spike',
    //     // label: {
    //     //     text: 'Websales',
    //     //     zindex: '10'
    //     // }
    // }],




    // 

