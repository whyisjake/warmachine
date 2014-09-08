define(["backbone", "handlebars", "jquery", "events"], function(Backbone, Handlebars, $, Events) {
  var PlayerView = Backbone.View.extend({
    events: {
      "click.name": "singlePlayerLink"
    },
    tagName: "li",
    className: "player",
    render: function() {
      var template = $("#playertemplate").html();
      var compiled = Handlebars.compile(template);
      var html = compiled(this.model.attributes);
      this.$el.html(html);
      return this;
    },
    singlePlayerLink: function(e) {
      e.preventDefault();
      var id = this.model.get("_id");
      var url = "players/" + id;
      Events.trigger("router:navigate", url);
    }
  });

  return PlayerView;
});
