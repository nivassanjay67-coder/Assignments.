function checkNumber(num) {
  if (num > 100) {
    throw new Error("Invalid number: Number cannot be greater than 100.");
  }
  console.log("Valid number:", num);
}
try {
  checkNumber(50);   
  checkNumber(150);  
} catch (error) {
  console.error("Error caught:", error.message);
} finally {
  console.log("Code executed.");
}
