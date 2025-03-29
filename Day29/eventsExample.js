const http = require('http');
const EventEmitter = require('events');

class ServerEmitter extends EventEmitter {}

const serverEmitter = new ServerEmitter();

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    serverEmitter.emit('homePage', res);
  } else {
    serverEmitter.emit('notFound', res);
  }
});

serverEmitter.on('homePage', (res) => {
  res.writeHead(200, {'Content-Type': 'text/plain'});
  res.end('Welcome to the Home Page!');
});

serverEmitter.on('notFound', (res) => {
  res.writeHead(404, {'Content-Type': 'text/plain'});
  res.end('Page Not Found');
});

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});
