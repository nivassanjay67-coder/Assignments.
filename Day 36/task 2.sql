SET @birthdate = DATE('1990-07-15');

SELECT 
    @birthdate AS birthdate,
    CURDATE() AS today,
    DATEDIFF(
        CASE 
            WHEN DATE_FORMAT(CURDATE(), '%m-%d') <= DATE_FORMAT(@birthdate, '%m-%d')
            THEN DATE_FORMAT(CONCAT(YEAR(CURDATE()), DATE_FORMAT(@birthdate, '-%m-%d')), '%Y-%m-%d')
            ELSE DATE_FORMAT(CONCAT(YEAR(CURDATE()) + 1, DATE_FORMAT(@birthdate, '-%m-%d')), '%Y-%m-%d')
        END,
        CURDATE()
    ) AS days_until_next_birthday;