CREATE VIEW order_customer_product_view AS
SELECT 
    o.order_id,
    o.order_date,
    c.customer_id,
    c.customer_name,
    p.product_id,
    p.product_name,
    p.price,
    o.quantity,
    (o.quantity * p.price) AS total_amount
FROM orders AS o
JOIN customers AS c ON o.customer_id = c.customer_id
JOIN products  AS p ON o.product_id  = p.product_id;