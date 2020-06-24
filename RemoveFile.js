

var fs = require('fs');
fs.unlink('D:/Project/NodeJs/Demo22-6-2020/folder1/anjali.txt',(err) => {
    if(err) throw err;
    console.log('myText.txt was deleted');
});