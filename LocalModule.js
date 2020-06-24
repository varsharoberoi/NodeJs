var myLogModule = require('./calc.js');
// person = require('D:/Project/NodeJs/Demo22-6-2020/person.js');
person = require('./person.js');
var add=myLogModule.Add(5,6);

var Subtraction=myLogModule.Sub(10,6);

var multiplication=myLogModule.Mult(10,6);

var multiplication=myLogModule.Div(10,2);

//console.log(person.fullname("anjali","dadhich"));// not working
console.log(person.FormatString("Hello %s"));