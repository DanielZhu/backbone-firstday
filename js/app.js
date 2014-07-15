// Author: Thomas Davis <thomasalwyndavis@gmail.com>
// Filename: main.js

// Require.js allows us to configure shortcut alias
// Their usage will become more apparent futher along in the tutorial.
require.config({
  paths: {
    jquery: 'libs/jquery/jquery-min',
    underscore: 'libs/underscore/underscore-min',
    backbone: 'libs/backbone/backbone',
    bootstrap: 'libs/bootstrap/bootstrap.min',
    text: 'libs/require/text',
    templates: 'templates'
  },
  shim: {
    bootstrap: {
      deps: ['jquery'],
      exports: 'Bootstrap'
    },
    underscore: {
      exports: '_'
    },
    backbone: {
      deps: ['jquery', 'underscore'],
      exports: 'Backbone'
    }
  }
});

require([
  // Load our app module and pass it to our definition function
  'main',
], function(Main){
  // The "main" dependency is passed in as "Main"
  // Again, the other dependencies passed in are not "AMD" therefore don't pass a parameter to this function
  Main.initialize();
});
