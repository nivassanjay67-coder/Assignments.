DELIMITER //

CREATE PROCEDURE ShowEmployeesByDepartment(IN dept_id INT)
BEGIN
    SELECT *
    FROM Employees
    WHERE DepartmentID = dept_id;
END //

DELIMITER ;