CREATE TABLE employees (
    employee_id INT PRIMARY KEY,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    salary DECIMAL(10,2),
    hire_date DATE
);
INSERT INTO employees (employee_id, first_name, last_name, salary, hire_date) VALUES
(1, 'John', 'Doe', 60000, '2019-05-12'),
(2, 'Sarah', 'Miller', 82000, '2020-03-18'),
(3, 'David', 'Kim', 92000, '2021-07-25'),
(4, 'Emma', 'Stone', 74000, '2022-11-09'),
(5, 'Michael', 'Lee', 78000, '2023-02-14');
SELECT *
FROM employees
WHERE hire_date BETWEEN '2020-01-01' AND '2022-12-31';