// String Literal
// let fullName = "John Doe"
// let age = 33;
// let address = "Manado";

// Halo nama saya john Done, umur saya 33 tahun dan daya tinggal di manado
// ES5
// let kalimat5 = 
//     "Halo nama saya " + 
//     fullName +
//     ", umur saya " +   
//      age + 
//     " tahun dan saya tinggal di " +
//      address
// console.log(kalimat5);

// ES6
// let kalimat6 = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`
// console.log(kalimat6)

// Arrow Function
// const sayGreetings6 = () => {
//     return `Hello world`;
// }
// console.log(sayGreetings6)

// Implicit Return Value
// const sayGreetings6 = (name) => `Hello${name};`
// //Pada IIFE
// (()=> {
//     console.log("Hello")
// })

// let output1=(()=> `Hello`)();
// console.log(output1)

// //Pada Callback
// const numbers = [1,2,3,4,5];
// let output2 = numbers.map((item)=>item);
// console.log(output2);


// Default Parameter
const sayGreetings6 = (fullName = "John Doe") => {
    console.log(`Hello ${fullName}`);
};
sayGreetings6("Petger");


