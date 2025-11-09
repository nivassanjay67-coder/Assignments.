function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed.");
  }
  return a / b;
}
try {
  console.log(divide(10, 2));  
  console.log(divide(8, 0));   
} catch (error) {
  console.error("Error caught:", error.message);
} finally {
  console.log("Code executed.");
}