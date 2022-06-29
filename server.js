const http = require('http');

const HOST = '127.0.0.1';
const PORT = process.env.PORT || 5000;

const server = http.createServer((request, response) => {
 console.log(request.method);
 response.end('hello');
});
server.listen(PORT, HOST, () => {
  console.log(`Server on ${HOST}:${PORT}`);
});
