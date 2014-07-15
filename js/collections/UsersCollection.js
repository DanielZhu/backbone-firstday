define([
  'underscore', 
  'backbone', 
  'libs/backbone/localstorage', 
  'models/UserModel'
  ], function(_, Backbone, Store, UserModel){
	  
	var UsersCollection = Backbone.Collection.extend({

    // Reference to this collection's model.
    model: UserModel,

    // Save all of the todo items under the `"todos"` namespace.
    // localStorage: new Store("todos"),
  });
  return UsersCollection;
});
