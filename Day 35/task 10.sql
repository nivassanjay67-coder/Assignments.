CREATE OR REPLACE VIEW vw_valid_phones AS
SELECT
    employee_id,
    first_name,
    last_name,
    phone AS raw_phone,
    CASE
        WHEN LENGTH(REGEXP_REPLACE(phone, '[^0-9]', '')) = 10 THEN 
            CONCAT('+1', REGEXP_REPLACE(phone, '[^0-9]', ''))
        WHEN LENGTH(REGEXP_REPLACE(phone, '[^0-9]', '')) = 11 
             AND LEFT(REGEXP_REPLACE(phone, '[^0-9]', ''),1) = '1' THEN
            CONCAT('+', REGEXP_REPLACE(phone, '[^0-9]', ''))
        ELSE
            'INVALID'
    END AS normalized_phone
FROM employees;