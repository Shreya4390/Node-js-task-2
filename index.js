import http from 'http';
import add from './add';

const server = http.createServer((req, res) => {
  res.end('hello', add(1, 3));
}).listen(3000);

export default server;
