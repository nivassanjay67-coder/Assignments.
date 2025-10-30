function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]; 
  }
  return sum;
}
const nums = [2, 5, 8, 3];
console.log(sumArray(nums)); 