//Array Literal
// Mendeklarasikan secara literal(secara langsung)
// let students = ["john","bob",'peter'];
// let num = [1,2,3,4,5];
// let john = ["john", "doe",35,true]; 

// console.log(students);
// console.log(num);
// console.log(john);
// console.log(john.length);


// Array Index
// console.log(students[1]);//Mengakses data dalam array

// students[1]="Jane" //Merubah data
// console.log(students);

// console.log(students[students.length-1]);//Mengakses element terakhir dalam array

//Method toString
// console.log(john.toString());

//Method Join
// console.log(john.join()); //Bisa mengubah penghubung 

//Pop
// console.log(john.pop());//Mengeluarkan element array di index paling terakhir

//Push
// console.log(john.push("good Morning"));//menambah array

//shift
// console.log(john.shift())//Hapus paling pertama

//Unshift
// console.log(john.unshift("John"));//Menambah paling pertama

//splice
// console.log(john.splice(3,0,true));//sisip menambahkan ditengah array
//Parameter kedua "0" untuk menentukan mana yang dihapus, jika 0 maka tidak ada yang dihapus

//Slice
// let john2 = john.slice(2,3); //Memotong dan membuat array baru

//concat
//Menggabungkan 2 array


console.log("Batasan Pelajaran menuju object")

// Object JAvaScript
// Cara 1 : Object Literal
const john = {
    firstName :'John',
    lastName : "Doe",
    age : 35,
    isMarried :true,
    grade : [90, 8,100],
    address :{
        city:"Manado",
        province : "Sulawesi Utara",
        postalCode: "95371",
    },
    sayGreetings: function(){
        console.log("Hello my name is "+this.firstName)
    }
};

console.log(john)

//Cara akses property dalam object
//DOt Notation
// console.log(john.lastName);
// console.log(john.grade[2]);
// console.log(john.address.city);
// console.log(john.sayGreetings());

// Bracket Notation
// console.log(john["firstName"]);
// console.log(john["grade"][2]);
// console.log(john["address"]["city"])
// console.log(john["sayGreetings"]())
// john.job="Teacher";

//Array Object
let students = [
    {
        id:1,
        name : "John",
    },
    {
        id:2,
        name : "peter",
    },
    {
        id:3,
        name : "Jane",
    }
];

// Menggunakan forEach()
// students.forEach(function(item){
//     console.log(item);
//     console.log(item.name);
// });

// Menggunakan MAP (Bisa menyimpan perubahan di array baru)
// let output = students.map(function(item){
// return item.name;
// });

// Filter (Berbentuk array object=>bisa mengembalikan banyak data)
// let output = students.map(function(item){
//     return item.name==="peter";
//     });

//Find (Berbentuk object=>Hanya mengembalikan 1 nilai)
let output = students.map(function(item){
    return item.name==="peter";
    });
console.log(output)





