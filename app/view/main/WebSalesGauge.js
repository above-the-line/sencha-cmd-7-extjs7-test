Ext.define('MyApp.view.WebSalesGauge', {
    extend: 'Ext.Panel',
    alias: 'widget.needle-gauge',
    controller: 'anchored-tooltips',    



    requires: [
        'Ext.ux.gauge.Gauge',
        'Ext.ux.gauge.needle.Spike'
    ],

    width: '100%',
    height: 150,
    layout: {
        type: 'hbox'
    },

    captions: {
        title: 'Profits and Losses (per product category)'
    },

    viewModel: {
        data: {
            value: 30
        }
    },

    // html: [{
    //     'salesTest'
    // }],


    items: [{
 
        reference: 'webSales',
        xtype: 'gauge',
        flex: 1,
        bind: '{value}',
        needle: 'spike',
        cls: "Sales"
    }]

});