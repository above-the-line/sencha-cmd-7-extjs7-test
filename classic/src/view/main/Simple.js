/**
 * This example shows how to create basic panels. Panels typically have a header and a body,
 * although the header is optional. The panel header can contain a title, and icon, and
 * one or more tools for performing specific actions when clicked.
 */
Ext.define('MyApp.view.main.Simple', {
    extend: 'Ext.Container',
    xtype: 'basic-panels',

    requires: [
        'Ext.layout.container.Table'
    ],

    width: 200,
    layout: {
        type: 'table',
        columns: 4,
        tdAttrs: { style: 'padding: 10px; vertical-align: top;' }
    },

    defaults: {
        xtype: 'panel',
        width: 200,
        
        bodyPadding: 10
    },

    //////////////////
    items: [{
        title: 'Title',
    }, {
        title: 'Collapsible',
        collapsible: true,
        
    }, {
        title: 'Light UI',
        collapsible: true,
        ui: 'light',
        hidden: false,
        
    }, {
        title: 'Built in Tools',
        collapsed: true,
        collapsible: false,
        width: 260,
        
        tools: [
            { type: 'pin' },
            { type: 'refresh' },
            { type: 'search' },
            { type: 'save' }
        ],
        colspan: 4
    }, {
        title: 'Built in Tools in Light UI',
        collapsed: true,
        collapsible: false,
        width: 860,
        ui: 'light',
        hidden: false,
        
        tools: [
            { type: 'pin' },
            { type: 'refresh' },
            { type: 'search' },
            { type: 'save' }
        ],
        colspan: 4
    }, {
        collapsed: true,
        collapsible: false,
        header: {
            enableFocusableContainer: false,
            title: {
                text: 'Custom Tools using iconCls',
                focusable: true,
                tabIndex: 0
            }
        },
        width: 860,
        
        tools: [
            { iconCls: 'x-fa fa-wrench' },
            { iconCls: 'x-fa fa-reply' },
            { iconCls: 'x-fa fa-reply-all' },
            { iconCls: 'x-fa fa-rocket' }
        ],
        colspan: 4
    }, {
        collapsed: true,
        collapsible: false,
        ui: 'light',
        hidden: false,
        header: {
            enableFocusableContainer: false,
            title: {
                text: 'Custom Tools using iconCls in Light UI',
                focusable: true,
                tabIndex: 0
            }
        },
        width: 860,
        
        tools: [
            { iconCls: 'x-fa fa-wrench' },
            { iconCls: 'x-fa fa-reply' },
            { iconCls: 'x-fa fa-reply-all' },
            { iconCls: 'x-fa fa-rocket' }
        ],
        colspan: 4
    }, {
        collapsed: true,
        collapsible: false,
        header: {
            enableFocusableContainer: false,
            title: {
                text: 'Custom Tools using glyph configuration',
                focusable: true,
                tabIndex: 0
            }
        },
        width: 860,
        
        tools: [
            { glyph: 'xf0ad@FontAwesome' },
            { glyph: 'xf112@FontAwesome' },
            { glyph: 'xf122@FontAwesome' },
            { glyph: 'xf135@FontAwesome' }
        ],
        colspan: 4
    }, {
        collapsed: true,
        collapsible: false,
        ui: 'light',
        hidden: false,
        header: {
            enableFocusableContainer: false,
            title: {
                text: 'Custom Tools using glyph configuration in Light UI',
                focusable: true,
                tabIndex: 0
            }
        },
        width: 860,
        
        tools: [
            { glyph: 'xf0ad@FontAwesome' },
            { glyph: 'xf112@FontAwesome' },
            { glyph: 'xf122@FontAwesome' },
            { glyph: 'xf135@FontAwesome' }
        ],
        colspan: 4
    },


]
});