// THIS WORKS (MEMORY LOAD ONLY) BUT ISN'T CORRECT BECAUSE THE TYPE IS JSON
// THIS IS NOT NEEDED FOR THE WORKING EXAMPLE WHICH INSTANTIATES THE STORE
// WITH A BIND WHILST DEFINING IT IN THE VIEW COMPONENT
// 
// Ext.define('MyApp.store.Customer', {
//     extend: 'Ext.data.Store',

//     requires: 'Ext.data.proxy.JsonP',
//     alias: 'store.customer',

//     model: 'MyApp.model.Customer',

//     proxy: {
//         // type: 'memory',

//         type: 'jsonp',
//         url: 'http://45.76.116.27/ARESAPI/customers/1',
        
//         reader: {
//             type: 'json',
//             rootProperty: ''
//         },
//         autoload: true
//     },

//     data: {
//         "customerId": "2",
//         "branchId": 1,
//         "title": "Mr",
//         "firstName": "Richard",
//         "middleName": "",
//         "lastName": "Burndred",
//         "homeAddress": {
//             "id": 1,
//             "name": "",
//             "address": [
//                 "1 The Road",
//                 "",
//                 "",
//                 "Dunedin"
//             ],
//             "postCode": "9001",
//             "phone": "03 123 4567",
//             "extension": "",
//             "fax": "01 234 5678",
//             "mobile": "",
//             "email": "",
//             "dpid": "0",
//             "barcode": "",
//             "narrative": ""
//         },
//         "deliveryAddress": {
//             "id": 2,
//             "name": "",
//             "address": [
//                 "1 The Road",
//                 "",
//                 "",
//                 "Dunedin"
//             ],
//             "postCode": "9020",
//             "phone": "03 123 4567",
//             "extension": "",
//             "fax": "01 234 5678",
//             "mobile": "",
//             "email": "",
//             "dpid": "0",
//             "barcode": "",
//             "narrative": ""
//         },
//         "dear": "Mr",
//         "startDate": "2019-12-22T00:49:02.03+00:00",
//         "maritalStatus": "Married",
//         "sex": "Male",
//         "spouseCode": "Put a ring on it",
//         "spouseFirstName": "Barbara",
//         "spouseLastName": "Bush",
//         "dateOfBirth": "2019-12-22T00:49:02.03+00:00",
//         "birthdayDay": 22,
//         "birthdayDayFormatted": "22",
//         "birthdayMonth": 12,
//         "birthdayMonthFormatted": "12",
//         "birthdayYear": 2019,
//         "birthdayYearFormatted": "2019",
//         "children": 0,
//         "userField1": "string",
//         "userField2": "string",
//         "note": {
//             "id": 3700,
//             "note": "string"
//         },
//         "allowDirectMarket": true,
//         "allowDirectMarketYN": "Yes",
//         "directMarketingMailingList": true,
//         "directMarketingMailingListYN": "Yes",
//         "directMarketingEmail": true,
//         "directMarketingEmailYN": "Yes",
//         "directMarketingMobile": true,
//         "directMarketingMobileYN": "Yes",
//         "category1": "string",
//         "subCategory": "string",
//         "subSubCategory": "string",
//         "category2": "string",
//         "category3": "string",
//         "category4": "string",
//         "posMessage": "string",
//         "mailingList": true,
//         "pictureFilename": "string",
//         "clubStatus": "None",
//         "createdBy": "system",
//         "updatedBy": "system",
//         "invoiceForm": 0,
//         "webpage": "string",
//         "discountMatrixId": 0,
//         "postalMarketingStatus": 0,
//         "emailMarketingStatus": 0,
//         "smsMarketingStatus": 0,
//         "customAttributes": []
//     }

// });