require.config({
  baseUrl: '/javascripts',
  paths: {
    jquery: 'lib/jquery',
    backbone: 'lib/backbone',
    underscore: 'lib/underscore',
    handlebars: 'lib/handlebars',
    form: 'lib/form',
    md5: 'lib/md5'
  },
  shim: {
    backbone: {
      deps: ['underscore', 'jquery'],
      exports: 'Backbone'
    },
    underscore: {
      exports: '_'
    },
    handlebars: {
      exports: 'Handlebars'
    }
  }
});

require(["init"]);
