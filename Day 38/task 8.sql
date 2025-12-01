DELIMITER $$

CREATE FUNCTION calculate_tax(p_price DECIMAL(10,2), p_tax_rate DECIMAL(5,2))
RETURNS DECIMAL(10,2)
DETERMINISTIC
BEGIN
    RETURN p_price * (p_tax_rate / 100);
END $$

DELIMITER ;
SELECT calculate_tax(100.00, 8.25);  