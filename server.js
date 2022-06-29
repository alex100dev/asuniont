const http = require('http');
const fs = require('fs');

const func = {
  readFileSync: function(path) {
    var encoding;
    if (path.split('.')[1] == 'html') {
      encoding = 'utf8';
    } 
    return fs.readFileSync(path, {
      encoding: encoding, 
      flag: 'r'
    });
  }
};

const HOST = '127.0.0.1';
const PORT = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
  if (request.method == 'GET') {
    if (request.url == '/') {
      response.setHeader("Content-Type", "text/html");
      response.end(func.readFileSync(__dirname + '/dist/index.html'));
    }
    
  } 
});
server.listen(PORT, HOST, () => {
  console.log(`Server on ${HOST}:${PORT}`);
});
