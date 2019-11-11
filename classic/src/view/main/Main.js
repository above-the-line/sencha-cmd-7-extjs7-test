/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('MyApp.view.main.Main', {
    extend: 'Ext.tab.Panel',
    xtype: 'app-main',

    requires: [
        'Ext.plugin.Viewport',
        'Ext.window.MessageBox',
        'MyApp.view.main.MainController',
        'MyApp.view.main.MainModel',
        'MyApp.view.main.List',
        'MyApp.view.main.TestChart',
    ],

    controller: 'main',
    viewModel: 'main',

    ui: 'navigation',

    tabBarHeaderPosition: 1,
    titleRotation: 0,
    tabRotation: 0,

    header: {
        layout: {
            align: 'stretchmax'
        },
        title: {
            flex: 0
        },
        iconCls: 'ccc-logo'
    },

    tabBar: {
        flex: 1,
        layout: {
            align: 'stretch',
            overflowHandler: 'none'
        }
    },

    responsiveConfig: {
        tall: {
            headerPosition: 'top'
        },
        wide: {
            headerPosition: 'left'
        }
    },

    defaults: {
        bodyPadding: 20,
        tabConfig: {
            responsiveConfig: {
                wide: {
                    iconAlign: 'left',
                    textAlign: 'left'
                },
                tall: {
                    iconAlign: 'top',
                    textAlign: 'center',
                    width: 120
                }
            }
        }
    },

    items: [{
        title: 'Dashboard',
        // The following grid shares a store with the classic version's grid as well!
        items: [
            // {
            //     title: 'Chart',
            //     xtype: 'chart',
            //     width: 500,
            //     height: 300,
            //     store: {
            //         fields: ['name', 'g1', 'g2'],
            //         data: [
            //             {"name": "Item-0", "g1": 18.34,"g2": 0.04},
            //             {"name": "Item-1", "g1": 2.67, "g2": 14.87},
            //             {"name": "Item-2", "g1": 1.90, "g2": 5.72},
            //             {"name": "Item-3", "g1": 21.37,"g2": 2.13},
            //             {"name": "Item-4", "g1": 2.67, "g2": 8.53},
            //             {"name": "Item-5", "g1": 18.22,"g2": 4.62},
            //             {"name": "Item-6", "g1": 28.51, "g2": 12.43},
            //             {"name": "Item-7", "g1": 34.43, "g2": 4.40},
            //             {"name": "Item-8", "g1": 21.65, "g2": 13.87},
            //             {"name": "Item-9", "g1": 12.98, "g2": 35.44},
            //             {"name": "Item-10", "g1": 22.96, "g2": 38.70},
            //             {"name": "Item-11", "g1": 0.49, "g2": 51.90},
            //             {"name": "Item-12", "g1": 20.87, "g2": 62.07},
            //             {"name": "Item-13", "g1": 25.10, "g2": 78.46},
            //             {"name": "Item-14", "g1": 16.87, "g2": 56.80}
            //         ]
            //     },

            //     legend: {
            //         docked: 'right'
            //     },

            //     axes: [{
            //         type: 'numeric',
            //         position: 'left',
            //         grid: true
            //     }, {
            //         type: 'category',
            //         position: 'bottom',
            //         visibleRange: [0, 0.4]
            //     }],

            //     series: [{
            //         type: 'area',
            //         xField: 'name',
            //         yField: ['g1', 'g2'],
            //         title: ['G1', 'G2'],
            //         style: {
            //             stroke: '#666666',
            //             fillOpacity: 0.8
            //         }
            //     }]
            // },
            {
                xtype: 'mainlist'
            }
            ,
            {
                xtype: 'testchart'
            }
            
        ]
    }, {
        title: 'Users',
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Groups',
        
        bind: {
            html: '{loremIpsum}'
        }
    }, {
        title: 'Settings',
        iconCls: 'x-fa fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
