CREATE PROCEDURE CalculateBill(
    IN p_Price DECIMAL(10,2),
    IN p_Quantity INT,
    OUT p_Bill DECIMAL(10,2)
)
BEGIN
    SET p_Bill = p_Price * p_Quantity;
END //

DELIMITER ;
CALL CalculateBill(50.75, 4, @totalBill);
SELECT @totalBill;