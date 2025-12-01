CREATE PROCEDURE IncreaseProductPrice(
    IN p_Percentage DECIMAL(5,2)
)
BEGIN
    UPDATE Products
    SET Price = Price + (Price * p_Percentage / 100);
END //

DELIMITER ;
CALL IncreaseProductPrice(15);