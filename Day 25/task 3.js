function checkNumber(num) {
  if (num < 0) {
    throw new Error("Number cannot be negative.");
  }
  console.log("Number is valid:", num);
}
try {
  checkNumber(-5);
} catch (error) {
  console.error("Error caught:", error.message);
} finally {
  console.log("Code executed.");
}