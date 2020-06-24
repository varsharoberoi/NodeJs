
var fs = require("fs");
//  1)Opendir show the folder having all file
(async (path) => {
    const dir = await fs.promises.opendir(path);
    for await (const dirent of dir) {
      console.log(dirent.name);
    }
  })('./folder');

  // 2)Dir.close 
  fs.opendir("./folder", (err, dir) => {
    console.log(dir);
    dir.read((err, dirent) => {
      console.log(dirent);
      console.log(dir.path);
      dir.read((err, dirent) => {
        console.log(dirent);})

      dir.close();
    
    });
  });
  // Error
// var filename="anjali.txt";
//   fs.watch('./folder', { encoding: 'buffer' }, (eventType, filename) => {
//     if (filename) {
//       console.log(filename);
//       // Prints: <Buffer ...>
//     }
//   });