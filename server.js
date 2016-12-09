var fs = require('fs');
var path = require('path');
var express = require('express');
var app = express();
var port = process.env.PORT || 3000;

var personPageTemplate = fs.readFileSync(path.join(__dirname, 'index.html'), 'utf8');
app.use(express.static(path.join(__dirname)));

app.get('/index.html', function(req, res){
  res.send(content);
});

app.get('*', function(req, res) {
  res.status(404).sendFile(path.join(__dirname, '404.html'));
});

app.listen(3000, function() {
  console.log('Example app listening on port 3000!');
});
