try {
  console.log(x);
} catch (error) {
  console.error("Error Name:", error.name);
  console.error("Error Message:", error.message);
} finally {
  console.log("Code executed.");
}