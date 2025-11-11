function sumAll(...numbers) {
  return numbers.reduce((total, num) => total + num, 0);
}
console.log(sumAll(1, 2, 3));       
console.log(sumAll(5, 10, 15, 20)); 
console.log(sumAll());              
function logDetails(...info) {
  console.log("Logging details:", info);
}

logDetails("Alice", 25, "Developer", "New York");