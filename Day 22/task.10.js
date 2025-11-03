const student = {
  name: "Ssnjay",
  age: 15,
  grade: "10th Grade",
  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
};
const student2 = Object.create(student);
student2.name = "Divya";
student2.age = 16;
student2.grade = "11th Grade";
student.__proto__.sayHello = function() {
  console.log(`Hello, I'm ${this.name}!`);
};
student.sayHello(); 
student2.sayHello(); 