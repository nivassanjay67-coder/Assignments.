function checkNumber(num) {
  if (num < 0) {
    throw new Error("Input number cannot be negative");
  }
  return `The number ${num} is valid.`;
}
try {
  console.log(checkNumber(5));   
  console.log(checkNumber(-3));  
} catch (error) {
  console.error("Error caught:", error.message);
}