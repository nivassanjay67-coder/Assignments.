SELECT
    birthdate,
    EXTRACT(YEAR FROM birthdate)  AS year,
    EXTRACT(MONTH FROM birthdate) AS month,
    EXTRACT(DAY FROM birthdate)   AS day
FROM users;