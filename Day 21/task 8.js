const students = [
  ["Alice", 85],
  ["Bob", 92],
  ["Charlie", 78],
  ["Diana", 88]
];
students.forEach(student => {
  const [name, mark] = student;
  console.log(`Name: ${name}, Mark: ${mark}`);
});