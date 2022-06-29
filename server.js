const http = require('http');
const fs = require('fs');

const func = {
  readFileSync: function(path) {
    var encoding;
    if (path.split('.')[1] == 'html') {
      encoding = 'utf8';
    }
    if (path.split('.')[1] == 'css') {
      encoding = 'utf8';
    }
    if (path.split('.')[1] == 'js') {
      encoding = 'utf8';
    }
    if (path.split('.')[1] == 'ico') {
      encoding = 'utf8';
    }
    /*return fs.readFileSync(path, {
      encoding: encoding, 
      flag: 'r'
    });
    */
    return fs.readFileSync(path);
  }
};

//const HOST = 'localhost';
const PORT = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
  console.log(request.method, request.url);
  if (request.method == 'GET') {
    if (request.url == '/') {
      response.setHeader("Content-Type", "text/html");
      response.end(func.readFileSync(__dirname + '/dist/index.html'));
    }
    if (request.url == '/style.css') {
      response.setHeader("Content-Type", "text/css");
      response.end(func.readFileSync(__dirname + '/dist/style.css'));
    }
    if (request.url == '/script.js') {
      response.setHeader("Content-Type", "text/javascript");
      response.end(func.readFileSync(__dirname + '/dist/script.js'));
    }
    if (request.url == '/favicon.ico') {
      response.setHeader('Content-Type' , 'image/ico');
      response.end(func.readFileSync(__dirname + '/dist/favicon.ico'));
    }
    
  } 
});
/*
server.listen(PORT, HOST, () => {
  console.log(`Server on ${HOST}:${PORT}`);
});
*/
server.listen(PORT, () => {
  console.log(`Server on ${PORT}`);
});
