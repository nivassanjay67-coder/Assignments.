try {
  console.log(x);
} catch (error) {
  if (error instanceof ReferenceError) {
    console.error("A ReferenceError was caught:", error.message);
  } else {
    throw error;
  }
}