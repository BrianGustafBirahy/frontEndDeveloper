
// // //Destructuring dengan Mengambil Sebagian Item// // //
// //ARRAY
// const vehicles = ['mustang', 'f-150', 'expedition'];

// // Destructuring array dengan mengambil sebagian item
// const [car, ...otherVehicles] = vehicles;

// // Output
// console.log(car); // 'mustang'
// console.log(otherVehicles); // ['f-150', 'expedition']

// Object
const user = {
    name: 'John Doe',
    age: 30,
    city: 'Jakarta'
  };
  
  // Destructuring objek dengan mengambil sebagian item
  const { name, ...otherProperties } = user;
  
  // Output
  console.log(name); // 'John Doe'
  console.log(otherProperties); // { age: 30, city: 'Jakarta' }