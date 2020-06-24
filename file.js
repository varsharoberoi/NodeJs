//  //read file data start
//  var fs = require("fs");
// var http = require("http");
// var path = require("path")
// http.createServer(function (request, response) {
 
//  response.writeHead(200, {'Content-Type': 'text/plain'});
//  fs.readFile('./info.json', function (err, data) {
//      if (err) return console.error(err);
//       console.log(data.toString());
//       console.log(JSON.parse(data.toString()).name);
//     console.log(JSON.parse(data.toString()).age);
//     });

// response.write("Anjali \n");
 
//  response.end('Hello World\n');
// }).listen(8081);

// // end //read file data start



// // find count .htm file in particular directory-----------
// var path = require('path'), fs=require('fs');

// function fromDir(startPath,filter){

//     //console.log('Starting from dir '+startPath+'/');

//     if (!fs.existsSync(startPath)){
//         console.log("no dir ",startPath);
//         return;
//     }
// var count=0;
//     var files=fs.readdirSync(startPath);
//     for(var i=0;i<files.length;i++){
//         var filename=path.join(startPath,files[i]);
//         var stat = fs.lstatSync(filename);
//         if (stat.isDirectory()){
//             fromDir(filename,filter); //recurse
//         }
//         else if (filename.indexOf(filter)>=0) {
//             console.log('-- found: ',filename);
//             count++;
//         };
       
//     };
//     console.log(count);
// };

// fromDir('./folder','.html');

// // End // find count .htm file in particular directory-----------

var fs = require('fs'); 
fs.readdir( './folder', function(error, files) {  
    var totalFiles = files.length; // return the number of files
    console.log(totalFiles); // print the total number of files 
});