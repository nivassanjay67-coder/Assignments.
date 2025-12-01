CREATE PROCEDURE InsertNewOrder(
    IN p_CustomerID INT,
    IN p_OrderDate DATE,
    IN p_TotalAmount DECIMAL(10,2)
)
BEGIN
    INSERT INTO Orders (CustomerID, OrderDate, TotalAmount)
    VALUES (p_CustomerID, p_OrderDate, p_TotalAmount);
END //

DELIMITER ;
CALL InsertNewOrder(101, '2025-12-01', 250.75);