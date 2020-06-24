//It is used for formating purpose
var utli=require("util");
var txt=" this my House No. %d and this is so beautiful %s";
var output=utli.format(txt,10,"House");
console.log(output);