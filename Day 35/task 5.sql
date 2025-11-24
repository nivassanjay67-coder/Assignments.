SELECT 
    phone AS OriginalPhone,
    REPLACE(phone, '-', '') AS CleanPhone
FROM employees;