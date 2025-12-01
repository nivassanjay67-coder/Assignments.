DELIMITER $$

CREATE PROCEDURE get_product_details (
    IN p_product_id INT
)
BEGIN
    SELECT *
    FROM products
    WHERE product_id = p_product_id;
END $$

DELIMITER ;