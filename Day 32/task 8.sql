CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,  
    name VARCHAR(100) NOT NULL,                
    price DECIMAL(10,2) NOT NULL,             
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP  
);
INSERT INTO products (name, price)
VALUES
    ('Laptop', 1200.00),
    ('Smartphone', 800.00),
    ('Headphones', 150.00),
    ('Keyboard', 75.00),
    ('Monitor', 300.00);
SELECT *
FROM products
WHERE price > 500;