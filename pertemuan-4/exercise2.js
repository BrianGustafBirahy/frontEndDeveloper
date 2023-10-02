// Brian Gustaf Birahy


//Menggunakan IIFE
// (function(num1, num2) {
//     let isGreater = num1 > num2 ? num1 : num2;
//     console.log(isGreater);
// })(30, 12);

//Menggunakan Callback Function
function compareNumbers(num1, num2, callback) {
    let isGreater = num1 > num2 ? num1 : num2;
    callback(isGreater);
}
compareNumbers(50, 41, function printResult(result) {
    console.log(result);
});
