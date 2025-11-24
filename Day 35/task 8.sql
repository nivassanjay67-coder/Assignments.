DELIMITER $$

CREATE PROCEDURE generate_usernames()
BEGIN
    DECLARE done INT DEFAULT FALSE;
    DECLARE v_id INT;
    DECLARE v_base VARCHAR(255);
    DECLARE v_username VARCHAR(255);
    DECLARE v_suffix INT;
    DECLARE cur CURSOR FOR
        SELECT employee_id,
               LOWER(CONCAT(SUBSTRING(first_name,1,1), last_name)) AS base_user
        FROM employees;

    DECLARE CONTINUE HANDLER FOR NOT FOUND SET done = TRUE;

    OPEN cur;

    read_loop: LOOP
        FETCH cur INTO v_id, v_base;
        IF done THEN
            LEAVE read_loop;
        END IF;

        SET v_username = v_base;
        SET v_suffix = 1;
        WHILE EXISTS (
            SELECT 1 FROM employees
            WHERE username = v_username AND employee_id <> v_id
        )
        DO
            SET v_username = CONCAT(v_base, LPAD(v_suffix, 3, '0'));
            SET v_suffix = v_suffix + 1;
        END WHILE;
        UPDATE employees
        SET username = v_username
        WHERE employee_id = v_id;

    END LOOP;

    CLOSE cur;
END$$
DELIMITER ;