function validateUser(name, email) {
  if (!name || name.trim() === "") {
    throw new Error("Invalid name: Name cannot be empty.");
  }
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    throw new Error("Invalid email: Please provide a valid email address.");
  }

  console.log("Validation passed for:", name, email);
}
try {
  validateUser("Alice", "alice@example.com"); 
  validateUser("", "test@example.com");    
  validateUser("Bob", "not-an-email");         
} catch (error) {
  console.error("Error caught:", error.message);
} finally {
  console.log("Code executed.");
}