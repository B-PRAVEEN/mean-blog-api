const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const mongoose = require('mongoose');

var app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));

app.use(function(err, req, res, next) {
  console.error(err.stack)
  res.status(500).send('Something broke!')
})

//connection string mlab
mongoose.connect("mongodb://edwisor:nokian73@ds055832.mlab.com:55832/edwisor");

//Collection Modules
var blogpost = require("./backend/schema/blogpostcollection").blogpost();

//Instance 
var blogpostcollection = mongoose.model('blogposts', blogpost);

//serve static files.
app.use(express.static(path.resolve(__dirname, 'frontend')));

//API modules MVC Mode.
require("./backend/createblog")(app, blogpostcollection);
require("./backend/viewBlog")(app, blogpostcollection);
require("./backend/viewparticularblog")(app, blogpostcollection);
require("./backend/editblog")(app, blogpostcollection);
require("./backend/delete")(app, blogpostcollection);

app.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function() {
  console.log("Edwisor Server Started");
});
