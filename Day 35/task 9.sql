SELECT 
    YEAR(hire_date)  AS hire_year,
    MONTH(hire_date) AS hire_month,
    COUNT(*)         AS hires_in_month
FROM employees
WHERE hire_date >= DATE_SUB(CURDATE(), INTERVAL 24 MONTH)
GROUP BY 
    YEAR(hire_date),
    MONTH(hire_date)
ORDER BY 
    YEAR(hire_date),
    MONTH(hire_date);