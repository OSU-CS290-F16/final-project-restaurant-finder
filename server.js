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
    //console.log(data[restaurant].fileName);

    content += "<img src = images/" + data[restaurant].fileName + " id = doneImage>";
    content+= "<p> " + data[restaurant].Restaurant + "</p>";
    content+= "<p> " + data[restaurant].Description + "</p>";
  });


  res.send(content);
});

app.get('*', function(req, res) {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
