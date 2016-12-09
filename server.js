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
    content += "<img src = " + data[restaurant].fileName + " id = doneImage>";

    var name = document.createElement('p');
   	name.innerHTML = data[restaurant].Restaurant;
    div.appendChild(name);

    var description = document.createElement('p');
   	description.innerHTML = data[restaurant].description;
    div.appendChild(description);
  });
  
  
  res.send(content);
});

app.get('*', function(req, res) {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
