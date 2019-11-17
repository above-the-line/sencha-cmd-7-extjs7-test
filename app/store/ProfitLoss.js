Ext.define('MyApp.store.ProfitLoss', {
    extend: 'Ext.data.Store',
    alias: 'store.profitloss',
     
    fields: ['quarter', 'shirts', 'dresses', 'trousers', 'accessories'],
    data: [
        { quarter: 'Q1 2012', shirts: 7, dresses: 3, trousers: 5, accessories: -7 },
        { quarter: 'Q2 2012', shirts: 7, dresses: 4, trousers: 6, accessories: -4 },
        { quarter: 'Q3 2012', shirts: 8, dresses: 5, trousers: 7, accessories: -3 },
        { quarter: 'Q4 2012', shirts: 10, dresses: 3, trousers: 8, accessories: -1 },
        { quarter: 'Q1 2013', shirts: 6, dresses: 1, trousers: 7, accessories: -2 },
        { quarter: 'Q2 2013', shirts: 7, dresses: -4, trousers: 8, accessories: -1 },
        { quarter: 'Q3 2013', shirts: 8, dresses: -6, trousers: 9, accessories: 0 },
        { quarter: 'Q4 2013', shirts: 10, dresses: -3, trousers: 11, accessories: 2 },
        { quarter: 'Q1 2014', shirts: 6, dresses: 2, trousers: 9, accessories: -1 },
        { quarter: 'Q2 2014', shirts: 6, dresses: 6, trousers: 10, accessories: -6 },
        { quarter: 'Q3 2014', shirts: 8, dresses: 9, trousers: 12, accessories: -7 },
        { quarter: 'Q4 2014', shirts: 9, dresses: 11, trousers: 11, accessories: -4 }
    ]

});