define(["backbone", "handlebars", "form"], function(Backbone, Handlebars, Form) {
  var SubmitPlayerView = Backbone.View.extend({
    render: function() {
      var template = $("#submitplayertemplate").html();
      var compiled = Handlebars.compile(template);
      this.$el.html(compiled);
      return this;
    }
  });

  return SubmitPlayerView;
});
