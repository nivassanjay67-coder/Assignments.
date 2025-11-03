class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }

  display() {
    console.log(`Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`);
  }
}
const student1 = new Student("Alice", 15, "10th Grade");
const student2 = new Student("Bob", 16, "11th Grade");
const student3 = new Student("Charlie", 14, "9th Grade");
student1.display();
student2.display();
student3.display();