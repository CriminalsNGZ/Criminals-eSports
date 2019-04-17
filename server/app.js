var express = require("express"),
    app = express(),
    path = require("path"),
    server = require("http").createServer(app)
    Players = require("./players");

var port = process.env.PORT,
    serverAddress = process.env.ADDRESS;

app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));
app.set("views", path.join(__dirname, "views"));

app.get("/", function(req,res) {
    res.render("index", {selectedPage: "index"});
});

app.get("/news", function(req,res) {
    res.render("news", {selectedPage: "news"});
});
app.get("/players", function(req,res) {
  res.render("players", {selectedPage: "players", Players: Players});
});
app.get("/registration", function(req,res) {
    res.render("registration", {selectedPage: "registration"});
});
app.get("/social", function(req,res) {
    res.render("social", {selectedPage: "social"});
});

server.listen(port, serverAddress, function () {
  console.log("server listening at " + serverAddress + ":" + port);
});
