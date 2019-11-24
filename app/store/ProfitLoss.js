Ext.define('MyApp.store.ProfitLoss', {
    extend: 'Ext.data.Store',
    alias: 'store.profitloss',
     
    fields: ['quarter', 'shirts', 'dresses', 'trousers', 'accessories'],
    data: [
        { quarter: 'Jan \'19', shirts: 7, dresses: 3, trousers: 5, accessories: -7 },
        { quarter: 'Feb \'19', shirts: 7, dresses: 4, trousers: 6, accessories: -4 },
        { quarter: 'Mar \'19', shirts: 8, dresses: 5, trousers: 7, accessories: -3 },
        { quarter: 'Apr \'19', shirts: 10, dresses: 3, trousers: 8, accessories: -1 },
        { quarter: 'May \'19', shirts: 6, dresses: 1, trousers: 7, accessories: -2 },
        { quarter: 'Jun \'19', shirts: 7, dresses: -4, trousers: 8, accessories: -1 },
        { quarter: 'Jul \'19', shirts: 8, dresses: -6, trousers: 9, accessories: 0 },
        { quarter: 'Aug \'19', shirts: 10, dresses: -3, trousers: 11, accessories: 2 },
        { quarter: 'Sep \'19', shirts: 6, dresses: 2, trousers: 9, accessories: -1 },
        { quarter: 'Oct \'19', shirts: 6, dresses: 6, trousers: 10, accessories: -6 },
        { quarter: 'Nov \'19', shirts: 8, dresses: 9, trousers: 12, accessories: -7 },
        { quarter: 'Dec \'19', shirts: 9, dresses: 11, trousers: 11, accessories: -4 }
    ]

});