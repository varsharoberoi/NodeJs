var http = require("http");
http.createServer(function (request, response) {
 // Send the HTTP header
 // HTTP Status: 200 : OK
 // Content Type: text/plain
 response.writeHead(200, {'Content-Type': 'text/plain'});
response.write("Anjali \n");
console.log(path.dirname(__filename));
 // Send the response body as "Hello World"
 response.end();
}).listen(8081);