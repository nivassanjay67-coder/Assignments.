CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    salary DECIMAL(10,2)
);
INSERT INTO employees (employee_id, first_name, last_name, salary) VALUES
(1, 'John', 'Doe', 60000),
(2, 'Sarah', 'Miller', 82000),
(3, 'David', 'Kim', 92000),
(4, 'Emma', 'Stone', 74000),
(5, 'Michael', 'Lee', 78000);
SELECT first_name, salary
FROM employees
WHERE salary > 75000;