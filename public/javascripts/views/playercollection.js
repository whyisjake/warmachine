define(["backbone", "views/players"], function(Backbone, PlayerView) {
  var PlayerCollectionView = Backbone.View.extend({
    initialize: function() {
      this.listenTo(this.collection, "reset", this.render);
    },
    tagName: "ul",
    className: "players",
    render: function() {
      this.$el.html("");
      this.collection.each(function(players) {
        var playerView = new PlayerView({ model: players });
        this.$el.append(playerView.render().el);
      }, this);
      return this;
    }
  });

  return PlayerCollectionView;
});
