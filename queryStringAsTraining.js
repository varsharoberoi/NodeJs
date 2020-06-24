// It is used to find the value of query string parameters in url
var http = require("http");
var url = require("url");
var querystring = require('querystring');
http.createServer(function (request, response) {

 response.writeHead(200, {'Content-Type': 'application/json'});
 // .parse Deserialize a query string to an object. parse()	Parses the querystring and returns an object
 var q=querystring.parse('name=anjali&age=10')
var p= url.parse(request.url,true);//
console.log(p.query);//{ name: 'anjali', age: '10' }
console.log(p.path);///a/b/c?name=anjali&age=10
console.log("query String parameter name is:" +q.name);//anjali
console.log("query String parameter age is:" +q.age);//10
//Console.log("--Now --");
//.stringify is used to Serialize an object to a query string
var string=querystring.stringify({ foo: 'bar', baz: ['qux', 'quux'], corge: '' })
console.log(string); //foo=bar&baz=qux&baz=quux&corge=
//var decode=queryString.decode("name=anjali&age=10")
//console.log("query String is:" +q);  //it gives error why
var escape=querystring.escape("name=anjali&age=10");
console.log(escape);//name%3Danjali%26age%3D10
var unescape=querystring.unescape("name%3Danjali%26age%3D10");
console.log(unescape);//name=anjali&age=10
response.end();
}).listen(8081);