define(["backbone", "events", "collections/players", "views/playercollection", "views/detailedplayer", "views/submitplayer"], function(Backbone, Events, PlayerCollection, PlayerCollectionView, DetailedPlayerView, SubmitPlayerView) {
  var Router = Backbone.Router.extend({
    initialize: function() {
      var self = this;
      this._setupCollection();
      Events.on("router:navigate", function(url) {
        self.navigate(url, { trigger: true });
      });
    },
    routes: {
      "": "index",
      "players/:id": "singlePlayer",
      "submit/tournament": "submitTournament",
      "submit/player": "submitPlayer"
    },
    _setupCollection: function() {
      if(this.collection) return;
      var data = $("#initialContent").html();
      this.collection = new PlayerCollection(JSON.parse(data));
    },
    _renderView: function(view) {
      $(".app").html(view.render().el);
    },
    index: function() {
      var view = new PlayerCollectionView({ collection: this.collection});
      this._renderView(view);
    },
    singlePlayer: function(id) {
      var player = this.collection.get(id);
      var view = new DetailedPlayerView({ model: player });
      this._renderView(view);
    },
    submitPlayer: function(id) {
      var view = new SubmitPlayerView();
      this._renderView(view);
    }
  });
  return Router;
});
