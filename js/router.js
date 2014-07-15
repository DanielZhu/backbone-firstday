// Filename: router.js
define([
  'jquery',
  'underscore',
  'backbone',
  'views/AppView',
  'views/UserDetailView'
], function($, _, Backbone, AppView, UserDetailView) {

  var AppRouter = Backbone.Router.extend({
    routes: {
      'user': 'addUser',
      'user/:id': 'showUser',

      // Default
      '*actions': 'defaultAction'
    }
  });

  var initialize = function(){
    var app_router = new AppRouter;

    app_router.on('route:addUser', function () {
        var app_view = new AppView;
    });

    app_router.on('route:showUser', function (id) {
      console.log( "Get number " + id );  
      var userDetailView = new UserDetailView;
      userDetailView.render();
    });

    app_router.on('route:defaultAction', function (actions) {
       // We have no matching route, lets display the home page
        var app_view = new AppView;
    });

    // Unlike the above, we don't call render on this view as it will handle
    // the render call internally after it loads data. Further more we load it
    // outside of an on-route function to have it loaded no matter which page is
    // loaded initially.
    Backbone.history.start();
  };
  return {
    initialize: initialize
  };
});
