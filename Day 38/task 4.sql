CREATE TABLE products (
    product_id INT PRIMARY KEY,
    product_name VARCHAR(100),
    stock INT
);
DELIMITER $$

CREATE PROCEDURE update_product_stock (
    IN p_product_id INT,
    IN p_new_stock  INT
)
BEGIN
    UPDATE products
    SET stock = p_new_stock
    WHERE product_id = p_product_id;
END $$

DELIMITER ;
CALL update_product_stock(10, 50);