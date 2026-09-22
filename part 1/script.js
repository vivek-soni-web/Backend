//Fundamental of JavaScript:
//Arrays and object
//Function return
//Async js coding
//forEach map filter find indexOf

//forEach
// var arr = [1,2,3,4];
// arr.forEach(function(val){
//     console.log(val + " hello");
// })


//map
// var arr = [1,2,3,4];

// var newarr = arr.map(function(val){
//     // return 13; //[13,13,13,13]
//     // return val; //[1,2,3,4]
//     return val*3; //[3,6,9,12]
// })

// console.log(newarr);


// //filter
// var arr = [1,2,3,4];

// var ans = arr.filter(function(val){
//     if(val >= 3) {return true;}
//     else return false;
// })
// console.log(ans);


// //find
// var arr = [1,2,3,4];

// var ans = arr.find(function(val){
//     if(val === 2) return val;
// })
// console.log(ans);

// //indeOf
// var arr = [1,2,3,4];

// var ans = arr.indexOf(3);
// console.log(ans);


// //Arrays and object
// //isi ko ham (key value pairs) bhi kahte hai

// var obj = {
//     name: "Vivek"
//     age: 12
// }


// age();

// // ye wala topic phir se padhna hai 


// await

// ye bhi phir se padhna hai 


 //async js coding

//line by line code chale isey kahte hai synchronous
//jo bhi code async nature ka ho, usey side stack mein bhej do and agle code ko chalao jo bhi sync nature ka ho, jab bhi saara syn code chal jaaye, tab check karo ki async code complete huaa ya nhi and agar wo complete huaa ho to usey main stack mein laao and chala do

// async function abcd(){
//     var blob = await fetch(`https://randomuser.me/api/`);
//     var ans = await blob.json()

//     console.log(ans);
// }

// abcd();

