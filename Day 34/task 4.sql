CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    salary DECIMAL(10,2),
    hire_date DATE,
    department_id INT,
    active TINYINT 
);
INSERT INTO employees (employee_id, first_name, last_name, salary, hire_date, department_id, active) VALUES
(1, 'John', 'Doe', 60000, '2019-05-12', 1, 1),
(2, 'Sarah', 'Miller', 82000, '2020-03-18', 2, 0),
(3, 'David', 'Kim', 92000, '2021-07-25', 3, 1),
(4, 'Emma', 'Stone', 74000, '2022-11-09', 5, 0),
(5, 'Michael', 'Lee', 78000, '2023-02-14', 4, 1),
(6, 'Sophia', 'Brown', 67000, '2021-01-10', 3, 0);
SELECT *
FROM employees
WHERE active = 0;