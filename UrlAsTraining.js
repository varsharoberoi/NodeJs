var http = require("http");
var url = require("url");
var querystring = require('querystring');
http.createServer(function (request, response) {

 response.writeHead(200, {'Content-Type': 'application/json'});
//response.write(request.url);
//var address="http://localhost:8081/a/b/c?name=anjali&age=10";
var p= url.parse(request.url,true);
console.log(p.query);//show url query parameters  { name: 'anjali', age: '10' }
console.log(p.host);//null
console.log(p.pathname);///a/b/c
console.log(p.path);///a/b/c?name=anjali&age=10


var p1= url.parse(request.url,true).query;
console.log(p1.name);//anjali
console.log(p1.age);//10
var text=p1.name +" "+p1.age;//anjali 10
response.write(text);
//response.json(jsonData.toString());//it is uesd at time of get method
 response.end();
}).listen(8081);