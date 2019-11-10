/**
 * 100% stacked area are multi-series area charts where categories are stacked (percentage
 * values) on top of each other, with an additional category 'Others' that is used to sum
 * up the various categories for each series to a perfect 100%.
 */
Ext.define('MyApp.view.main.Stacked100', {
    extend: 'Ext.Panel',
    xtype: 'area-stacked-100',
    controller: 'area-stacked-100',

    width: 650,

    tbar: [
        '->',
        {
            text: 'Preview',
            handler: 'onPreview'
        }
    ],

    items: [{
        xtype: 'cartesian',
        reference: 'chart',
        width: '100%',
        height: 500,
        insetPadding: '10 20 10 10',
        store: {
            type: 'browsers'
        },
        legend: {
            docked: 'bottom'
        },
        captions: {
            title: 'Area Charts - 100% Stacked Area',
            credits: {
                text: 'Data: Browser Stats 2012\n' +
                    'Source: http://www.w3schools.com/',
                align: 'left'
            }
        },
        axes: [{
            type: 'numeric',
            position: 'left',
            fields: ['data1', 'data2', 'data3', 'data4', 'other' ],
            grid: true,
            minimum: 0,
            maximum: 100,
            renderer: 'onAxisLabelRender'
        }, {
            type: 'category',
            position: 'bottom',
            fields: 'month',
            grid: true,
            label: {
                rotate: {
                    degrees: -45
                }
            }
        }],
        series: [{
            type: 'area',
            fullStack: true,
            title: [ 'IE', 'Firefox', 'Chrome', 'Safari', 'Others' ],
            xField: 'month',
            yField: [ 'data1', 'data2', 'data3', 'data4', 'other' ],
            style: {
                opacity: 0.80
            },
            marker: {
                opacity: 0,
                scaling: 0.01,
                animation: {
                    duration: 200,
                    easing: 'easeOut'
                }
            },
            highlightCfg: {
                opacity: 1,
                scaling: 1.5
            },
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'
            }
        }]
    }]

});