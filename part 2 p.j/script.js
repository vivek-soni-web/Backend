// npm init -> package.json -> lekha jokha of the project 

/*const fs = require('node:fs');*/

// writefile 
// appendfile 
// copyfile 
// rename 
// unlink 

// fs.writeFile("hey.txt", "hey hello kaise ho", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.appendFile("hey.txt", " mai to axa hu", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.rename("hey.txt", "hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.copyFile("hello.txt", "./copy/chacha.txt", function(err){
//     if(err) console.error(err);
//     else console.log("done");
// })

// fs.copyFile("hello.txt", "./copy2/chacha.txt", function(err){
//     if(err) console.error(err.message);
//     else console.log("done");
// })

// fs.unlink("hello.txt", function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })

// fs.rmdir("./copy", {recursive: true}, function(err){
//     if(err) console.error(err);
//     else console.log("removed");
// })



const http = require('http');

const server = http.createServer(function(req, res){
    res.end("hello world");
})

server.listen(3000);