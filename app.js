// @require @packageOverrides
Ext.Loader.setConfig({

});

/*
 * This file launches the application by asking Ext JS to create
 * and launch() the Application class.
 */
Ext.application({

    name: 'MyApp',

    requires: [
        // This will automatically load all classes in the MyApp namespace
        // so that application classes do not need to require each other.
        'MyApp.*'
    ],

    // THIS WAY OF CREATING APP WORKS
    // The name of the initial view to create.
    mainView: 'MyApp.view.main.Main'

    // INSTEAD OF THE ABOVE, TESTING BELOW
    // launch: function() {
    //     Ext.create('MyApp.view.MyViewport');
    // }


});
