Ext.define('MyApp.store.ConstCenter', {
    extend: 'Ext.data.Store',
    alias: 'store.cost-center',

    fields: ['FY19CostCenter', 'cost'],

    data: [
        {FY19CostCenter: 'Salaries-and-remuneration', cost: 25.3},
        {FY19CostCenter: 'Leasing', cost: 18},
        {FY19CostCenter: 'Marketing', cost: 12.3},
        {FY19CostCenter: 'Legal', cost: 10},          
        {FY19CostCenter: 'Technology', cost: 7},
        {FY19CostCenter: 'Manufacturing', cost: 4.4},
        {FY19CostCenter: 'Shipping', cost: 3}
    ]

});