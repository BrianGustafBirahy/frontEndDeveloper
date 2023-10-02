// JavaScript Function

// Cara 1 : Bisa panggil dulu sebelum mendeklarsikan body function
// console.log(greetings())
// function greetings() {
//     return "Hello";
// }

// Cara 2 : Sedangkan cara 2 harus mendeklarasikan body function dulu sebelum dipanggil

// const age = 17 //Global
// const greetings = function() {
//     const job = "Teacher"; //local
//     return "Hello";
//     if (job === teacher) {
//         const address = "Manado" //blok
//     }
// }
// console.log(greetings())
// console.log(age)


// IIFE (Immediately Invoke Function Expressions) => dipanggil secara otomatis
// Anonymous Function
// (function(){
//     console.log("Hello IIFE")
// })();

//Callback Function => function yang berada didalam parameter fungsi
// function createGreetings(name, callback){
//     const greetings = "Hello " + name;
//     callback(greetings);
// }
// createGreetings("John",function(greetings){
//     console.log(greetings);
// });

//                                                  cara lebih panjang
// function logGreetings(greetings){
//     console.log(greetings);
// }
// createGreetings("John",logGreetings);

