class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = "ValidationError";
  }
}
function validateFormData(name, email, age) {
  if (!name || name.trim() === "") {
    throw new ValidationError("Name cannot be empty.");
  }

  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailPattern.test(email)) {
    throw new ValidationError("Invalid email format.");
  }

  if (age < 18) {
    throw new ValidationError("You must be at least 18 years old.");
  }

  if (age > 100) {
    throw new ValidationError("Age cannot exceed 100.");
  }

  console.log("✅ Validation passed for:", name);
}

// ✅ Example usage with try...catch...finally
try {
  // ❌ Try changing these values to trigger different errors
  const name = "Alice";
  const email = "alice@example.com";
  const age = 16;

  validateFormData(name, email, age);
  console.log("Form submitted successfully!");
} catch (error) {
  console.error("❌ Error Name:", error.name);
  console.error("❌ Error Message:", error.message);
} finally {
  console.log("🧩 Validation process completed.");
}