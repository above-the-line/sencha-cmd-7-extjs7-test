/**
 * A basic donut chart functions precisely like a pie chart. The only difference is that
 * the center is blank. This is typically done to increase the readability of the data
 * labels that may be around. The example makes use of two interactions: 'itemhighlight'
 * and 'rotate'. To use the first one, hover over or tap on a pie sector. To use the
 * second one, click or tap and then drag anywhere on the chart.
 */
Ext.define('MyApp.view.main.CostCenterPieChart', {
    extend: 'Ext.Panel',
    alias: 'widget.cost-center-pie-chart',
    controller: 'cost-center',
    // height: 650,
    // width: 500,
    // tbar: [
    //     '->',
    //     {
    //         text: 'Preview',
    //         handler: 'onPreview'
    //     }
    // ],

    // style: {
    //     borderColor: 'blue',
    //     borderStyle: 'solid'
    // },
    
    // innerPadding: 20,
   
  
  
  
    items: [{
        // title: 'Cost Centers:',
        // headerPosition: 'left',
        xtype: 'polar',
        reference: 'cost_center_chart', //referenced by controller
        captions: {
            // title: 'Donut Charts - Basic',
            // credits: {
            //     text: 'Data: IDC Predictions - 2017\n' +
            //     'Source: Internet',
            //     align: 'left'
            // }
        },
        width: '100%',
        height: 250,
        innerPadding: 25,
        store: {
            type: 'cost-center'
        },
        legend: {
            type:'sprite',
            docked: 'left'
        },
        interactions: ['rotate', 'itemhighlight'],    
        series: [{
            type: 'pie',
            angleField: 'cost',        // key from store
            donut: 50,
            label: {
                field: 'FY19CostCenter',    // key from store
                display: 'outside'
            },
            highlight: true,
            tooltip: {
                trackMouse: true,
                renderer: 'onSeriesTooltipRender'  // method from controller
            },
        }] //SERIES
    }] //ITEMS
    
});