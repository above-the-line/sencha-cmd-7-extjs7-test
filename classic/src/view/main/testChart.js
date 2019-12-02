Ext.define('MyApp.view.main.TestChart', {
    extend: 'Ext.chart.CartesianChart',
    // xtype: 'testchart',
    alias: 'widget.testchart',
    // background: {
    //     type: 'linear',
    //     degrees: 0,
    //     stops: [
    //         {
    //             offset: 1,
    //             color: '#e3e3e3'
    //         },
    //         {
    //             offset: 0,
    //             color: '#e3e3e3'
    //         }
    //     ]
    // },
    
    // iconCls: 'x-fa fa-cog',

    width: '100%',
    height: 150,
    store: {
        // fields: ['name', 'TodaysHits', 'AllTimeHigh'],
        data: [
            {"name": "Item-0", "TodaysHits": 18.34,"AllTimeHigh": 0.04},
            {"name": "Item-1", "TodaysHits": 2.67, "AllTimeHigh": 14.87},
            {"name": "Item-2", "TodaysHits": 1.90, "AllTimeHigh": 5.72},
            {"name": "Item-3", "TodaysHits": 21.37,"AllTimeHigh": 2.13},
            {"name": "Item-4", "TodaysHits": 2.67, "AllTimeHigh": 8.53},
            {"name": "Item-5", "TodaysHits": 18.22,"AllTimeHigh": 4.62},
            {"name": "Item-6", "TodaysHits": 28.51, "AllTimeHigh": 12.43},
            {"name": "Item-7", "TodaysHits": 34.43, "AllTimeHigh": 4.40},
            {"name": "Item-8", "TodaysHits": 21.65, "AllTimeHigh": 13.87},
            {"name": "Item-9", "TodaysHits": 12.98, "AllTimeHigh": 35.44},
            {"name": "Item-10", "TodaysHits": 22.96, "AllTimeHigh": 38.70},
            {"name": "Item-11", "TodaysHits": 0.49, "AllTimeHigh": 51.90},
            {"name": "Item-12", "TodaysHits": 20.87, "AllTimeHigh": 62.07},
            {"name": "Item-13", "TodaysHits": 25.10, "AllTimeHigh": 78.46},
            {"name": "Item-14", "TodaysHits": 16.87, "AllTimeHigh": 56.80}
        ]
    },

    legend: {
        docked: 'bottom'
    },

    axes: [{
        type: 'numeric',
        position: 'left',
        grid: false,
        hidden: true
    }, {
        type: 'category',
        opacity: 0,
        position: 'bottom',
        hidden: true,
        visibleRange: [0, 100],
        style: {
            strokeStyle: 'red'
        },
        // padding: 20,    //the below don't work when hidden is true
        // margin: 30,
        // floating: -50,
        // title: 'hourly hits vs yearly high'
    }],

    series: [{
        type: 'area',
        subStyle: {
            // Low (grey) / High (red)
            fill: ['#f5f5f5', '#f2c2c2'],   //COLOR OF THE AREAS
            fillOpacity: [0.3, 0.5],
            stroke: ['#1a1a1a', '#d42626']    //STROKE LINE OF THE INDIVIDUAL AREAS
        },
        xField: 'name',
        yField: ['TodaysHits', 'AllTimeHigh'],
        title: ['TodaysHits', 'AllTimeHigh'],
        style: {
            // stroke: '#ffffff',            //GLOBAL CHART STROKE ALL SET TO:
            // fillOpacity: 1.0            //GLOBAL CHART AREA ALL SET TO TRANSPARENT OR SOLID
        }
    }]
});