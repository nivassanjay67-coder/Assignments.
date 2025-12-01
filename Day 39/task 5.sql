CREATE PROCEDURE UpdateStudentPhone(
    IN student_id INT,
    IN new_phone VARCHAR(20)
)
BEGIN
    UPDATE Students
    SET PhoneNumber = new_phone
    WHERE StudentID = student_id;
END //

DELIMITER ;
CALL UpdateStudentPhone(101, '555-1234');