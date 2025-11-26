SELECT CONCAT(
           UPPER(LEFT(TRIM(your_column), 1)),  
           LOWER(SUBSTRING(TRIM(your_column), 2))  
       ) AS formatted_text
FROM your_table;