CREATE TABLE products (
    product_id INT PRIMARY KEY AUTO_INCREMENT,  
    name VARCHAR(100),                
    price DECIMAL(10,2),             
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP  
);