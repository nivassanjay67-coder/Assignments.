SELECT 
    employee_id,
    email AS RawEmail,
    TRIM(email) AS TrimmedEmail
FROM employees
WHERE TRIM(email) <> email;