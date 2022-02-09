import http from 'http';
import * as i from './add';


console.log(i.sayLoud('Whoot!')); // Output: WHOOT!


const server = http.createServer((req, res) => {
  res.end('Server started successfully!',add(1, 2),);
}).listen(3000);

export default server;
