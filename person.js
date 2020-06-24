util=require('util')
var person={
fullname:function(firstname,lastname)
{
    return firstname +" "+ lastname;
},
GetFirstName:function(fullname)
{
arr= fullname.split('.');
return arr[0];
},
FormatString:function(data)
{
return util.format(data,'Ritu');

}
}
module.exports=person;

// //Another Way to create module
// var person = function(firstname,lastname) {
//     this.firstName= firstname;
//     this.lastName = lastname;
  
//     this.fullName = function() {
//       return this.firstName + " " + this.lastName;
//     }
//     this.info=function()
//     {}
//   };

//   function x(){

//   }
//   function y()
//   {
      
//   }
//   function z(){
//       x();
//       y();
// }
// module.exports=z;