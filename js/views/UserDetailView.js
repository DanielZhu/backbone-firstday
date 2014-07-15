define([
  'jquery', 
  'underscore', 
  'backbone',
  'text!templates/userDetailTemplate.html'
  ], function($, _, Backbone, userDetailTemplate){

  var UserDetailView = Backbone.View.extend({

    //... is a list tag.
    el: $("#page"),

    defaults: {
      user: null
    },

    // Cache the template function for a single item.
    userDetailTemplate: _.template(userDetailTemplate),

    // The DOM events specific to an item.
    events: {

    },

    // The UserDetailView listens for changes to its model, re-rendering. Since there's
    // a one-to-one correspondence between a **Todo** and a **UserDetailView** in this
    // app, we set a direct reference on the model for convenience.
    initialize: function(options) {
      _.bindAll(this, 'render');
      this.user = options.user;
    },

    // Re-render the contents of the todo item.
    render: function() {
      $(this.el).html(this.userDetailTemplate({user: this.user}));

      return this;
    },

    // Remove this view from the DOM.
    remove: function() {
      $(this.el).remove();
    }
  });
  return UserDetailView;
});
