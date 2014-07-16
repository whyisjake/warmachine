define(["backbone", "models/players"], function(Backbone, Player) {
  return Backbone.Collection.extend({
    model: Player,
    url: "/players"
  });
});
