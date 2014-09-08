define(["backbone", "handlebars", "form"], function(Backbone, Handlebars, Form) {
  var SubmitPlayerView = Backbone.View.extend({
	initialize: function() {
    },
    render: function() {
      var template = $("#submitplayertemplate").html();
      var compiled = Handlebars.compile(template);
      this.$el.html(compiled);
      $.getJSON( "/tournaments", function( data ) {

			var select = $('body select.tournament');

			$.each( data, function( key, val ) {
				option = "<option value='" + val._id + "'>" + val.title + "</option>";
				select.append( option );
			});

		});
      return this;
    }
  });

  return SubmitPlayerView;
});
