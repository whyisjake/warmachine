var db = require("../database.js");

exports.index = function(req, res) {
  db.players.find(function(err, players) {
    var data = JSON.stringify(players);
    res.render("index", {
      appData: data
    });
  });
};

exports.players = {};
/*
 * GET all players
 */
exports.players.all = function(req, res) {
  db.players.find(function(err, players) {
    if(err) return;
    res.json(players);
  });
};

/*
 * GET one book
 */
exports.players.one = function(req, res) {
  db.players.findOne({ "_id" : db.ObjectId(req.params.id) }, function(err, book) {
    if(err) return;
    res.json(book);
  });
};

/*
 * POST a new player
 */
exports.players.create = function(req, res) {
  res.json(req.body);
  db.players.save(req.body);
};


exports.tournaments = {};
/*
 * GET all tournaments
 */
exports.tournaments.all = function(req, res) {
  db.tournaments.find(function(err, tournaments) {
    if(err) return;
    res.json(tournaments);
  });
};

/*
 * GET one tournament
 */
exports.tournaments.one = function(req, res) {
  db.tournaments.findOne({ "_id" : db.ObjectId(req.params.id) }, function(err, book) {
    if(err) return;
    res.json(book);
  });
};

/*
 * POST a new tournament
 */
exports.tournaments.create = function(req, res) {
  res.json(req.body);
  db.tournaments.save(req.body);
};
