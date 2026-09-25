// Express.js Framework:

// Introduction to Express.js.
// express js ek npm package hai 
// framework 
// manages everything from receiving the reuest and giving the response


// import express from 'express'

// const app = express()

// app.get('/', (req, res) => {
//   res.send('Hello World')
// })

// app.listen(3000, () => {
//   console.log('Server is running on http://localhost:3000')
// })


// // Setting up a basic Express application.
// // Routing.
// // Request and response handling.

// const express = require('express');
// const app = express();

// //routes create karna
// // sheryians.com/profile
// // facebook.com/
// // twitter.com/
// // youtube.com/

// // app.get(Router, requestHandler)
// app.get("/", function(req, res){
//     res.send("chmpion mera anuj");
// });

// app.get("/profile", function(req, res){
//     res.send("champion uska coach");
// });

// app.listen(3000);

// // requestHandler eak middle beyar hota hai


// Middleware.

// jab bhi server request accept karta hai waha se route ke beech pahuchne tak agar app us request ko beech me rokte ho and kuchh perform karte ho , to ye element middleware kehlaata hai

// const express = require('express');
// const app = express();

// app.use(function(req, res, next){
//     console.log('middleware chala');
//     next();
// });

// app.use(function(req, res, next){
//     console.log('middleware chala eak baar aur chala');
//     next();
// });


// app.get("/", function(req, res){
//     res.send("chmpion mera anuj");
// });

// app.get("/about", function(req, res){
//     res.send("about page hai ye");
// });

// app.listen(3000);

// Error handling.

const express = require('express');
const app = express();

app.get("/", function(req, res){
    res.send("chmpion mera anuj");
});

app.get("/about", function(req, res, next){
    return next(new Error("Something went wrong"))
});

app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send("Something went wrong, We don't have any idea")
})

app.listen(3000);