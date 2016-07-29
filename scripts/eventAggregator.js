define( ['jquery', 'backbone', 'marionette'], function ( $, Backbone, Marionette ) {
    "use strict";

    /* Start : This piece of code will remove old events with same name.
     /* Gunjn/Prashant
     /* 17/03/2015
     */
    var tmpMethod = Backbone.Wreqr.EventAggregator.prototype.on;
    Backbone.Wreqr.EventAggregator.prototype.on = function ( name, callback, context ) {
        if ( !name || ( name && $.trim( name ).length === 0 ) ) {
            throw 'Please enter valid event name to bound';
            return;
        }
        this.off( name );
        tmpMethod.call( this, name, callback, context );
    };
    //End : This piece of code will remove old events with same name.

    return new Backbone.Wreqr.EventAggregator();
} );
