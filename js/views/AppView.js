define([
  'jquery',
  'underscore', 
  'backbone',
  'models/UserModel',
  'views/UserDetailView',
  'collections/UsersCollection',
  'text!templates/userFormDataTemplate.html',
  'text!templates/userFormTemplate.html',
  'text!templates/userTableTemplate.html'
  ], function($, _, Backbone, UserModel, UserDetailView, UsersCollection, userFormDataTemplate, userFormTemplate, userTableTemplate){
  var AppView = Backbone.View.extend({

    el: $("#page"),

    usersCollection: [],

    // Cache the template function for a single item.
    userTableTemplate: _.template(userTableTemplate),
    userFormDataTemplate: _.template(userFormDataTemplate),
    userFormTemplate: _.template(userFormTemplate),

    events: {
      "click #userSubmit": "addOne",
      'click .userDetail': "showUserDetail"
    },

    initialize: function() {
      _.bindAll(this, 'addOne', 'render');

      this.usersCollection = new UsersCollection;

      this.addOne();
      // this.usersCollection.on('change', this.render);
    },

    showUserDetail: function (element) {
      var userName = element.currentTarget.attributes.userName.value;
      var activeUser = null;
      $.each(this.usersCollection.toJSON(), function (index, user) {
        if (user.name === userName) {
          activeUser = user;
        }
      });
      var userDetailView = new UserDetailView({user: activeUser});
      userDetailView.render();
    },

    render: function() {
      var list = this.usersCollection.toJSON();
      $('#userForm').html(this.userFormTemplate({index: list.length}));
      $('#userTable').html(this.userTableTemplate({userList: list}));
      $('#userFormData').html(this.userFormDataTemplate({user: JSON.stringify(list[list.length - 1])}));
    },

    addOne: function() {
      var name = $('#username').val();
      var age = $('#userAge').val();
      
      var user = new UserModel({name: name, age: age});
      this.usersCollection.add(user);
      this.render();
    }
  });
  return AppView;
});
