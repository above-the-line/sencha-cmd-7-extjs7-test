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

    getSeriesConfig: function(field, title) {
        return {
            type: 'area',
            title: title,
            xField: 'quarter',
            yField: field,
            style: {
                opacity: 0.60
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
                renderer: function(tooltip, record, item) {
                    tooltip.setHtml(title + ' (' + record.get('quarter') + '): ' +
                        record.get(field));
                }
            }
        };
    },

    onAfterRender: function() {
        var chart = this.lookup('profitLossChart');

        chart.setSeries([
            this.getSeriesConfig('shirts', 'Shirts and Jackets'),
            this.getSeriesConfig('dresses', 'Dresses'),
            this.getSeriesConfig('trousers', 'Trousers and Suits'),
            this.getSeriesConfig('accessories', 'Accessories')
        ]);
    }

});