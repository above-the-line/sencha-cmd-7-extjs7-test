/**
 * An area chart with negative values.
 */

Ext.define('MyApp.view.main.ProfitLoss', {
    extend: 'Ext.chart.CartesianChart',
    alias: 'widget.profitloss',
    
    controller: 'profit-loss',
    width: 650,
    
    tbar: [
        '->',
        {
            text: 'Preview',
            handler: 'onPreview'
        }
    ],     
    items:[
        {
            xtype: 'cartesian',
            reference: 'profitLossChart',
            width: '100%',
            height: 500,
            insetPadding: '40 40 10 40',
            store: {
                type: 'profitloss'
            },
            legend: {
                docked: 'bottom'
            },
            captions: {
                title: 'Profits and Losses (per product category)'
            },
            axes: [
                {
                type: 'numeric',
                position: 'left',
                fields: ['shirts', 'dresses', 'trousers', 'accessories'],
                grid: true
                },
                {
                type: 'category',
                position: 'bottom',
                fields: 'quarter',
                label: {
                    rotate: {
                        degrees: -45
                    }
                }
                }
            ],
        }
    ],   

    listeners: {
        afterrender: 'onAfterRender'
    }

});