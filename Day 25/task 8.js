class UnderageError extends Error {
  constructor(message) {
    super(message);
    this.name = "UnderageError";
  }
}
function checkAge(age) {
  if (age < 18) {
    throw new UnderageError("Access denied: You must be at least 18 years old.");
  }
  console.log("Access granted. Welcome!");
}
try {
  checkAge(16); 
} catch (error) {
  if (error instanceof UnderageError) {
    console.error("Underage Error:", error.message);
  } else {
    console.error("An unexpected error occurred:", error.message);
  }
} finally {
  console.log("Age verification completed.");
}