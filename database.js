var dbUrl = "warmachine";
var collections = ["players", "tournaments"];

var db = require("mongojs").connect(dbUrl, collections);
module.exports = db;
