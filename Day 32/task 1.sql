CREATE TABLE employees (
    employee_id INT PRIMARY KEY AUTO_INCREMENT,
    first_name VARCHAR(50),
    last_name VARCHAR(50),
    job_title VARCHAR(100),
    department VARCHAR(100),
    hire_date DATE,
    salary DECIMAL(10,2)
);
INSERT INTO employees (first_name, last_name, job_title, department, hire_date, salary)
VALUES
    ('Alice', 'Johnson', 'Software Engineer', 'Engineering', '2024-03-01', 90000.00),
    ('Bob', 'Smith', 'Marketing Specialist', 'Marketing', '2024-04-15', 65000.00),
    ('Carol', 'Davis', 'Financial Analyst', 'Finance', '2024-05-10', 72000.00);