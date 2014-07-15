define(['underscore', 'backbone'], function(_, Backbone) {
  var UserModel = Backbone.Model.extend({

    // Default attributes for the todo.
    defaults: {
      name: "Name",
      age: 0
    },

    // Ensure that each todo created has `content`.
    initialize: function() {
      // if (!this.get("name")) {
      //   this.set({"name": this.defaults.content});
      // }
    },

    // Remove this Todo from *localStorage* and delete its view.
    clear: function() {
      this.destroy();
      this.view.remove();
    }

  });
  return UserModel;
});
