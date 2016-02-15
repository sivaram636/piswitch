#!/usr/bin/env node

var express = require("express"),
    app = express(),
    bodyParser = require('body-parser'),
    errorHandler = require('errorhandler'),
    methodOverride = require('method-override'),
    hostname = process.env.HOSTNAME || 'localhost',
    port = parseInt(process.env.PORT, 10) || 4567,
    publicDir = process.argv[2] || __dirname + '/public',
    path = require('path'),
    cors =require('cors');

app.get("/", function (req, res) {
  res.sendFile(path.join(publicDir, "/index.html"));
});

//app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());
app.use(methodOverride());
app.use(express.static(publicDir));
app.use(errorHandler({
  dumpExceptions: true,
  showStack: true
}));



var piRoutes = require('./routes/pi-routes');
app.post("/pi/toggle",bodyParser.json(),piRoutes.toggleSwitch);


console.log("Simple static server showing %s listening at http://%s:%s", publicDir, hostname, port);
app.listen(port, hostname);
