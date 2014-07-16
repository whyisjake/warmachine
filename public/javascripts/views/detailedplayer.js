define(["backbone", "handlebars"], function(Backbone, Handlebars) {
  var DetailedPlayerView = Backbone.View.extend({
    render: function() {
      var template = $("#detailedplayertemplate").html();
      var compiled = Handlebars.compile(template);
      var html = compiled(this.model.attributes);
      this.$el.html(html);
      return this;
    }
  });

  return DetailedPlayerView;
});
