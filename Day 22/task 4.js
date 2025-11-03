class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Employee Name: ${this.name}, Salary: $${this.salary}`);
  }
}
const emp1 = new Employee("Sanjay", 55000);
emp1.displayInfo();