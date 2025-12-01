CREATE TABLE employees (
    employee_id INT AUTO_INCREMENT PRIMARY KEY,
    first_name  VARCHAR(50),
    last_name   VARCHAR(50),
    job_title   VARCHAR(100),
    hire_date   DATE,
    salary      DECIMAL(10,2)
);
DELIMITER $$

CREATE PROCEDURE add_employee (
    IN p_first_name VARCHAR(50),
    IN p_last_name  VARCHAR(50),
    IN p_job_title  VARCHAR(100),
    IN p_hire_date  DATE,
    IN p_salary     DECIMAL(10,2)
)
BEGIN
    INSERT INTO employees (first_name, last_name, job_title, hire_date, salary)
    VALUES (p_first_name, p_last_name, p_job_title, p_hire_date, p_salary);
END $$

DELIMITER ;
CALL add_employee('John', 'Doe', 'Engineer', '2025-01-01', 80000.00);