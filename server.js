var http = require("http");
//jsonData=require("./info.json")
let person={ person=[{
    "name":"anjali","address":50
}]}
http.createServer(function (request, response) {

 response.writeHead(200, {'Content-Type': 'application/json'});
response.write(request.url);
response.write(people);
//response.json(jsonData.toString());//it is uesd at time of get method
 response.end();
}).listen(8081);