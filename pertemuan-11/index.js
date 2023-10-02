// import {fullName, angka, john} from "./utils.js";
// import helloWorld from "./utils.js";
// console.log(fullName);
// console.log(angka);
// console.log(john)
// greetings();
// helloWorld();


// Synchronous
// console.log("proses 1")
// console.log("proses 2")
// console.log("proses 3")
// console.log("proses 4")


// Asynchronous(non-bloking)


// Async
// 1. Parallel
// console.log("proses 1")
// setTimeout(()=>{
//     console.log("proses 2")
// },3000)
// setTimeout(()=>{
//     console.log("proses 3")
// },4000)
// console.log("proses 4")

// 2. Concurent
// setTimeout(()=>{
//     console.log("proses 1")
// })



// Promise
// then-catch
// let newPromise = new Promise((resolve, reject) => {
//     if (condition) {
//       // apa yang dilakukan jika promise fulfilled
//       resolve("Berhasil");
//     } else {
//       // apa yang dilakukan jika promise rejected
//       reject("Gagal");
//     }
// });

// newPromise
//     .then((result) => {
//         console.log(result);
//     })
//     .catch((error)=>console.log(error));

// Async-Await
const consumePromise = async()=>{
    let result=await newPromise;
    console.log(result)
};
consumePromise();


