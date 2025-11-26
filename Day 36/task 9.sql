SELECT
    full_name,
    SUBSTRING_INDEX(TRIM(full_name), ' ', 1) AS first_name,
    SUBSTRING_INDEX(TRIM(full_name), ' ', -1) AS last_name,
    CONCAT(
        UPPER(LEFT(SUBSTRING_INDEX(TRIM(full_name), ' ', 1), 1)),
        IF(LENGTH(SUBSTRING_INDEX(TRIM(full_name), ' ', -1)) > 0, 
           UPPER(LEFT(SUBSTRING_INDEX(TRIM(full_name), ' ', -1), 1)), '')
    ) AS initials
FROM your_table;