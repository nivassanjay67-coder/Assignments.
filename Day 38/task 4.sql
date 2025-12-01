DELIMITER $$

CREATE FUNCTION calculate_total_price(
    p_qty INT,
    p_price DECIMAL(10,2)
)
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN p_qty * p_price;
END $$

DELIMITER ;
SELECT calculate_total_price(5, 20.50);  