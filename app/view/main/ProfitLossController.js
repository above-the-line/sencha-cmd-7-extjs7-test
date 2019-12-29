Ext.define('MyApp.view.main.ProfitLossController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.profit-loss',

    onPreview: function() {
        var chart;

        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');

            return;
        }

        chart = this.lookup('profitLossChart');

        chart.preview();
    },

    //this sets the series element
    // defines the template that will be followed below
    // custom method defined here and called below
    // this will be returned as parameters of series
    // i.e. 
    // series: [{
    //    type: '',
    //    title: title,
    // }]
    getSeriesConfig: function(field, title, fillColor, fillOpacity, strokeColor) {
        return {
            type: 'area',
            title: title,   //THE TITLE OF EACH DATA SERIES DEFINED BELOW
            xField: 'quarter',
            yField: field,
            style:{
                opacity: 0.6,
            },
            subStyle:{
                fill: fillColor,
                fillOpacity: fillOpacity,
                stroke: strokeColor,
            },
            // colors: [color],   //COLOR OF THE AREAS
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
                renderer: function(tooltip, record, item) {
                    tooltip.setHtml(title + ' (' + record.get('quarter') + '): ' +
                        record.get(field));
                }
            }
        };
    },

    onAfterRender: function() {
        var chart = this.lookup('profitLossChart');

        // injects the series (setSeries) and states:
        // 0. the field (taken from store)
        // 1. what field name (title) will be [adds a label], 
        // 2. states the color of the area
        // as per template set forth in custom method getSeriesConfig defined above
        chart.setSeries([                                
                               //  field,        title,      fillColor, fillOpacity, strokeColor
            this.getSeriesConfig('shirts', 'Shirts/Jackets', '#34303B', 0.6, '#000000'), 
            this.getSeriesConfig('dresses', 'Dresses', '#56417A', 0.6, '#5B2299'),
            this.getSeriesConfig('trousers', 'Trousers and Suits', '#DBC78E', 0.6, '#DBC72E'),    //'#f2c2c2'  #AD9689  #D77C41
            this.getSeriesConfig('accessories', 'Accessories', '#8DC7A6', 0.6, '#62C7A6')
        ]);
    }
});

