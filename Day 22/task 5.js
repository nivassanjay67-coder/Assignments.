class Employee {
  constructor(name, salary) {
    this.name = name;
    this.salary = salary;
  }

  displayInfo() {
    console.log(`Employee Name: ${this.name}, Salary: $${this.salary}`);
  }
}
class Manager extends Employee {
  constructor(name, salary, department) {
    super(name, salary);
    this.department = department;
  }
  displayInfo() {
    console.log(
      `Manager Name: ${this.name}, Salary: $${this.salary}, Department: ${this.department}`
    );
  }
}
const manager1 = new Manager("Divya", 85000, "Engineering");
manager1.displayInfo();