SELECT 
    employee_id,
    hire_date,
    DATEDIFF(NOW(), hire_date) AS DaysSinceHired
FROM employees
WHERE employee_id = 1;