var http = require('http');

http.createServer(function (req, res) {
  res.write(`HTTP 200 OK`) && console.log(`EXPRESS: Web Execution Detected | Keeping Alive..`);
  res.end();
}).listen(8080); 


