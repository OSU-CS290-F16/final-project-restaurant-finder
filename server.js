var fs = require('fs');
var path = require('path');
var express = require('express');
var data = require('./data');
var app = express();
var port = process.env.PORT || 3000;

var mainSite = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
app.use(express.static(path.join(__dirname)));

app.get('/data', function(req, res){
  content = mainSite;

  Object.keys(data).forEach(function (restaurant) {
    content += "<img src = images/" + data[restaurant].fileName + " id = doneImage>";
    content+= "<p> " + data[restaurant].Restaurant + "</p>";
    content+= "<p> " + data[restaurant].Description + "</p>";
  });


  res.send(content);
});

// app.get('/data/:restaurant', function(req, res){
//   var restaurant = data[req.params.restaurant];
//   content = mainSite;
//   //  content += "<img src = images/" + data[restaurant].fileName + " id = doneImage>";
//   //  content+= "<p> " + data[restaurant].Restaurant + "</p>";
//   //  content+= "<p> " + data[restaurant].Description + "</p>";
//
//   res.send(content);
// });
app.get('/data/:restaurant', function (req, res, next) {
  var restaurant = data[req.params.restaurant];
  if (restaurant) {
    var content = "<html>";
    content += "<head>";
    content += "<meta charset='utf-8'>";
    content += "<title>Food finder</title>";
    content += "<link rel='stylesheet' href='/style.css'>";
    content += "</head>";
    content += "<body>";

    /*
     * Use regular expressions to replace our template patterns with the
     * actual info associated with the given person.
     */
    content += "<img src = images/" + restaurant.fileName + " id = doneImage>";
    content += "<p> " + restaurant.Restaurant + "</p>";
    content += "<p> " + restaurant.Description + "</p>";

    content += "</body>";
    content += "</html>";

    res.send(content);
  } else {
    // If we don't have info for the requested person, fall through to a 404.
    next();
  }
});

app.get('*', function(req, res) {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
