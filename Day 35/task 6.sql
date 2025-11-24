CREATE TABLE employee_contacts_clean (
    employee_id INT PRIMARY KEY,
    clean_email VARCHAR(255),
    clean_phone VARCHAR(50)
);
INSERT INTO employee_contacts_clean (employee_id, clean_email, clean_phone)
SELECT 
    employee_id,
    LOWER(TRIM(email)) AS clean_email,
    REGEXP_REPLACE(phone, '[^0-9]', '') AS clean_phone
FROM employees;