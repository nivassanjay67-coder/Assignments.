DELIMITER //

CREATE PROCEDURE GetHighestSalary(OUT max_salary DECIMAL(10,2))
BEGIN
    SELECT MAX(Salary) INTO max_salary
    FROM Employees;
END //

DELIMITER ;
CALL GetHighestSalary(@highest);
SELECT @highest;