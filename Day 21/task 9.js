const arr1 = ["apple", "banana", "cherry"];
const arr2 = ["orange", "grape", "melon"];
const combined1 = arr1.concat(arr2);
console.log("Combined using concat():", combined1);
const combined2 = [...arr1, ...arr2];
console.log("Combined using spread syntax:", combined2);