var path = require('path');
var path1="D:/Project/NodeJs/Demo22-6-2020/folder1/anjaliData.txt";
var pathBasename= path.basename('D:/Project/NodeJs/Demo22-6-2020/folder1/anjaliData.txt', '.txt');//// returns the last portion of a path
console.log(pathBasename);//anjaliData
var pathdelimeter= process.env.PATH.split(path1.delimiter);
//console.log(pathdelimeter);

var dirName=path.dirname(path1);
console.log("Directory Name is : "+dirName);// D:/Project/NodeJs/Demo22-6-2020/folder1

var extentionName=path.extname(path1);//.txt
console.log("Extension Name is : "+extentionName);

var pathParse=path.parse('root=/ignored&dir=/home/user/dir&base=file.txt')

var pathFormat=path.format(pathParse);

console.log("Path format="+pathFormat);
var pathJoin=path.join('/foo', 'bar', 'baz/asdf', 'quux', 'file.txt');
console.log("path join="+pathJoin);//\foo\bar\baz\asdf\quux\file.txt

var pathFor =path.format({ root: '/ignored', dir: '/home/user/dir', base: 'file.txt'  });
console.log(pathFor);///home/user/dir/file.txt

var pathParse1=path.parse('/home/user/dir/file.txt');
console.log(pathParse1);//{root: '/',dir: '/home/user/dir',base: 'file.txt',ext: '.txt',name: 'file' }

var dirName1=path.dirname(pathParse1.dir);
console.log("dirName1="+pathParse1.dir);//irName1=/home/user/dir
console.log("dirName11="+dirName1);//dirName11=/home/user
console.log("Extension="+pathParse1.ext);//.txt
console.log("Base="+pathParse1.base);//file.txt
console.log("File Name="+pathParse1.name);//file
console.log("Root Name="+pathParse1.root);//  /
console.log('Path resolve : ' + path.resolve('demo.js'));//Resolves to an absolute path.  //Output is  D:\Project\NodeJs\Demo22-6-2020\demo.js
console.log('Path path.isAbsolute : ' + path.isAbsolute(path1));//true
console.log('Path sep : ' + path.sep);//   \
console.log('Path delimiter : ' +path.delimiter);//:;
