class SafeCalculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Error: Division by zero is not allowed.");
    }
    return a / b;
  }
}
const calc = new SafeCalculator();

console.log(calc.add(5, 3));        
console.log(calc.subtract(10, 4));  
console.log(calc.multiply(2, 7));   

try {
  console.log(calc.divide(10, 0));
} catch (error) {
  console.error(error.message);  
}
