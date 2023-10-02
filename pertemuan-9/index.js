// Rest and Spread operator

// fitur lama
// const penjumlahanArray=(a,b,c)=>{
//     const array = [a,b,c];
//     let total = 0;
//     array.forEach((item)=>{
//         total=total+item
//     });
//     console.log(total);
// };

// penjumlahanArray(1,2,3);

// dengan rest parameter
const penjumlahanArray=(...params)=>{
    let total = 0;
    params.forEach((item)=>{
        total=total+item
    });
    console.log(total);
};

penjumlahanArray(1,2,3);

// Spread
// Disebarkan, Dapat mengubah array menjadi element individu
// const array1 =[1,2,3,4,5]
// console.log(...array)

// 1. Duplikasi Array
// let array2 = [...array1];
// array1.push(6);
// console.log(`Array1=${array1}, Array2=${array2}`)

// 2. Menggabungkan Array
const array1 = [1,2,3]
const array2 =[5,6,7]
const array3=[8,9,10]