//It is used to read ,create ,update,delete,rename tha file


//1)Read from json file
 var fs = require('fs');

fs.readFile('./info.json', (err, data) => {
    if (err) throw err;
    let student = JSON.parse(data);
    console.log(student);
    //Getting error------------
   // console.log("File Content is="+student);
//----------

});
console.log('This is after the read call');
// 2) Write data in file


let student = { 
    name: 'Mike',
    age: 23, 
    gender: 'Male',
    department: 'English',
    car: 'Honda' 
};
 
let data = JSON.stringify(student, null, 2);

fs.writeFile('D:/Project/NodeJs/Demo22-6-2020/folder/sample.json', data, (err) => {
    if (err)
    throw err;
   
    console.log('Data written to file');
}
);

console.log('This is after the write call');

//-------------------------------
// 3) writeFile function with filename, content and callback function
fs.writeFile('D:/Project/NodeJs/Demo22-6-2020/folder/newfile.txt', 'Learn Node FS module', function (err) {
    if (err) throw err;
    console.log('File is created successfully.');
  }); 
//  Rename file-----------------------------

// List all the filenames before renaming 
getCurrentFilenames(); 
   
// 4) Rename the file 
fs.rename('D:/Project/NodeJs/Demo22-6-2020/folder/new1.html', 'D:/Project/NodeJs/Demo22-6-2020/folder/world.txt', () => { 
  console.log("\nFile Renamed!\n"); 
   
  // List all the filenames after renaming 
  getCurrentFilenames(); 
}); 
   
// Function to get current filenames 
// in directory 
function getCurrentFilenames() { 
  console.log("Current filenames:"); 
  fs.readdirSync("folder").forEach(file => { 
    console.log(file); 
  }); 
} 
//-------End Rename file----------------------


5) delete the file
const pathToFile = "D:/Project/NodeJs/Demo22-6-2020/folder/world.txt"

fs.unlink(pathToFile, function(err) {
  if (err) {
    throw err
  } else {
    console.log("Successfully deleted the file.")
  }
})


// 6)Create a file with write mode
 var pathRef = "D:/Project/NodeJs/Demo22-6-2020/folder/anjali1.txt";

fs.open(pathRef, "w+", function(error, fd) {
  if (error) {
    console.error("open error:  " + error.message);
  } else {
    console.log("Successfully opened " + pathRef);
    console.log("opened  data" + fd);
    fs.writeFile('D:/Project/NodeJs/Demo22-6-2020/folder/anjali1.txt', 'Learn Node FS module', function (err) {
            if (err) throw err;
            console.log('File is writing after created successfully.');
          }); 
  }
});


// 7) append data to file
var newdata = "\nLearn Node.js with the help of well built Node.js Tutorial.";
fs.appendFile(pathRef,newdata, 'utf8',
    // callback function
    function(err) { 
        if (err) throw err;
        // if no error
        console.log("Data is appended to file successfully.")
});


























  // open function with filename, file opening mode and callback function
// fs.open('newfile_3.txt', 'w', function (err, file) {
//     if (err) throw err;
//     console.log('File is opened in write mode.');
//   }); 

