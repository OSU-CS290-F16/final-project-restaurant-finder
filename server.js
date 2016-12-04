var path = require('path');

var staticDir = path.join(__dirname, 'public');
var indexFilename = '/index.html';
var styleFile = '/style.css';
var notFoundFilename = '/404.html';
var scriptFile = '/index.js';
var port = process.env.PORT || 3000;
var http = require('http');
var fs = require('fs');
var url = require('url');


http.createServer(function (req, res) {

	var pathname = url.parse(req.url).pathname;
	console.log('Request made at: ' + url.parse(req.url).pathname);

	if(pathname == '/index.html' || pathname == '/'){ 

      fs.readFile(staticDir + indexFilename, function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
      });
    }


    else if(req.url.indexOf('.js') != -1 || req.url.indexOf('/index.js') != -1){ 

      fs.readFile(staticDir + scriptFile, function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/javascript'});
        res.write(data);
        res.end();
      });

    } 

   else if(req.url.indexOf('/style.css') != 1 || req.url.indexOf('.css') != -1){ 

      fs.readFile(staticDir + styleFile, function (err, data) {
        if (err) console.log(err);
        res.writeHead(200, {'Content-Type': 'text/css'});
        res.write(data);
        res.end();
      });
    }


    else{

    	fs.readFile(staticDir + notFoundFilename, function (err,data) {
    		if (err) console.log(err);
    			res.writeHead(404, {'Content-Type': 'text/html'});
    			res.write(data);
    			res.end();
    	});
    }

    

}).listen(port);

console.log('Server running at port:', port);


/*
var http = require('http');
var fs = require('fs');
var path = require('path');

function handleRequest(request, response) {
	console.log("requesting shit");
	
	var filePath = '.' + request.url;
	if (filePath == './')
		filePath = './index.html';
	var extname = path.extname(filePath);
	var contentType = 'text/html';
	switch (extname) {
		case '.js':
			contentType = 'text/javascript';
			break;
		case '.css':
			contentType = 'text/css';
			break;
		case '.json':
			contentType = 'application/json';
			break;
	}
	
	fs.readFile(filePath, function(error, content) {
		if (error) {
			if (error.code == 'ENOENT'){
				fs.readFile(notFoundFilename, function(error, content) {
					response.writeHead(200, { 'Content-Type': contentType });
					response.end(content, 'utf-8');
				});
			}
			else {
				response.writeHead(500);
				response.end('Sorry, site bork: '+error.code+'..\n');
				response.end();
			}
		}
		else {
			response.writeHead(200, { 'Content-Type': contentType });
			response.end(content, 'utf-8');
		}
	});
}
http.createServer(handleRequest);

var staticDir = path.join(__dirname, 'public');
var indexFilename = 'index.html';
var notFoundFilename = '404.html';
var port = process.env.PORT || 3000;

*/
