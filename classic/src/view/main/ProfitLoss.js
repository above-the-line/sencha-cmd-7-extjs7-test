/**
 * An area chart with negative values.
 */

Ext.define('MyApp.view.main.ProfitLoss', {
    extend: 'Ext.chart.CartesianChart',
    alias: 'widget.profitloss',
    
    controller: 'profit-loss',
    width: '100%',
    
    title: 'Category Profits',

    items:[
        {
            xtype: 'cartesian',
            reference: 'profitLossChart',
            width: '100%',
            height: 300,
            insetPadding: '20 20 5 5',
            store: {
                type: 'profitloss'
            },
            legend: {
                docked: 'bottom'
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