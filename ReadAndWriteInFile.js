var fs = require('fs');

fs.appendFile('D:/Project/NodeJs/Demo22-6-2020/folder1/anjaliData.txt', 'data to append', function (err) {
  if (err) 
  {throw err  ;
}
else{
  console.log('Saved!');
}
});