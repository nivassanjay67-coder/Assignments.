CREATE PROCEDURE GetTotalSalesByMonth(
    IN p_Year INT,
    IN p_Month INT,
    OUT p_TotalSales DECIMAL(15,2)
)
BEGIN
    SELECT SUM(TotalAmount)
    INTO p_TotalSales
    FROM Orders
    WHERE YEAR(OrderDate) = p_Year
      AND MONTH(OrderDate) = p_Month;
END //

DELIMITER ;
CALL GetTotalSalesByMonth(2025, 12, @totalSales);
SELECT @totalSales;