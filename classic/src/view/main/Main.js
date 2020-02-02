/**
 * This class is the main view for the application. It is specified in app.js as the
 * "mainView" property. That setting automatically applies the "viewport"
 * plugin causing this view to become the body element (i.e., the viewport).
 *
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
        layout: 'column',
        title: 'Dashboard',
        // The following grid shares a store with the classic version's grid as well!
        items: [
            {
                xtype: 'profitloss',
                columnWidth: 0.50,
            }
            ,
            {
                xtype: 'needle-gauge',
                columnWidth: 0.25,
            }
            ,
            {
                xtype: 'testchart',
                columnWidth: 0.25,
            }
            ,
            // {
            //     xtype: 'needle-gauge',
            //     columnWidth: 0.25
            // }
            // ,
            {
                xtype: 'testchart',
                columnWidth: 0.5,
            }
            ,
            // {
            //     xtype: 'customerlist',
            //     columnWidth: 0.5,          
          
                

            //     // STORE COULD HAVE BEEN ASSIGNED HERE
            //     // store: {
            //     //     model: 'MyApp.model.Customer',
            //     //     autoLoad: true
            //     // },
            // }
            // ,
            {
                xtype: 'customerlist',
                columnWidth: 1,          
                title: 'Top Customers'
            }
            ,
            {
                // padding: '0 0 0 0',
                title: 'Cost Centers',
                headerPosition: 'left',
                xtype: 'cost-center-pie-chart',
                columnWidth: 0.5
            }
            ,
            // ,
            // {
            //     xtype: 'customerlistfieldcontainer',
            //     columnWidth: 0.5,
            // }
        ]
    }, // Dashboard tab
    {
        title: 'Users',
        bind: {
            html: '{loremIpsum}'
        }
    },
    {
        title: 'Groups',
        
        bind: {
            html: '{loremIpsum}'
        }
    },
    {
        title: 'Settings',
        iconCls: 'x-fa fa-cog',
        bind: {
            html: '{loremIpsum}'
        }
    }]
});
