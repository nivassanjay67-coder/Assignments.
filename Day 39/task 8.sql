CREATE PROCEDURE LogUserLogin(
    IN p_UserID INT
)
BEGIN
    INSERT INTO UserLog (UserID, LoginTime)
    VALUES (p_UserID, NOW());
END //

DELIMITER ;
CALL LogUserLogin(101);