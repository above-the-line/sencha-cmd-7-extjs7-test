Ext.define('MyApp.view.main.CostCenterController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.cost-center',

    onPreview: function() {
        
        if (Ext.isIE8) {
            Ext.Msg.alert('Unsupported Operation', 'This operation requires a newer version of Internet Explorer.');
            
            return;
        }
        var chart;
        
        chart = this.lookup('cost_center_chart');

        chart.preview();
    },

    onDataRender: function(v) {
        return v + '%';
    },

    onSeriesTooltipRender: function(tooltip, record, item) {
        tooltip.setHtml(record.get('FY19CostCenter') + ': ' + record.get('cost') + '%');   //get record from store
    }

});