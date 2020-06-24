const url = require('url');

var http = require("http");
http.createServer(function (request, response) {
 
 
//response.write("Anjali \n");
 
const myURL =  url.parse('http://localhost:8081/a/b/c?query=anjali&age=50');
console.log(myURL.href);////http://localhost8081/a/b/c?query=anjali&age=50
console.log(myURL.hostname); //localhost8081
console.log(myURL.pathname);//a/b/c
console.log(myURL.port);//8081
console.log(myURL.path); ////a/b/c?query=anjali&age=50
console.log(myURL.query);//query=anjali&age=50

 response.end();
}).listen(8081);