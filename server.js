//Dependcies and handles to them
var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

var port = process.env.PORT || 3000;

var app = express();

var db = require('./models');

//Allows the static HTML to use CSS and JS files
app.use(express.static('public'));

app.use(bodyParser.urlencoded({ extended: false }));

//Override with POST having ?_method=DELETE
app.use(methodOverride("_method"));

//Set Handlebars
var exphbs = require('express-handlebars');

app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

//Import routes and give the server access to them.
require("./controllers/burgers_controller.js")(app);

db.sequelize.sync().then(function() {
  app.listen(port, function() {
    console.log("App listening on port " + port);
  });
});