// var fs = require("fs");

// fs.readFile("anjaliData.txt", function(err, buf) {
//   console.log(buf);

// });

var fs = require("fs");

fs.readFile("D:/Project/NodeJs/Demo22-6-2020/folder1/anjaliData.txt", "utf-8", (err, data) => {
    var a=data.toString();
   var countVowel= vowel_count(a);
   console.log("no. of vowels" +countVowel);
    console.log(a);
  console.log(data);
});

function vowel_count(str1)
{
  var vowel_list = 'aeiouAEIOU';
  var vcount = 0;
  
  for(var x = 0; x < str1.length ; x++)
  {
    if (vowel_list.indexOf(str1[x]) !== -1)
    {
      vcount += 1;
    }
  
  }
  return vcount;
}