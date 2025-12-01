CREATE TABLE order_items (
    order_id INT,
    product_id INT,
    quantity INT,
    price DECIMAL(10,2)
);
SELECT 
    order_id,
    product_id,
    quantity,
    price,
    calculate_total_price(quantity, price) AS total_price
FROM order_items;