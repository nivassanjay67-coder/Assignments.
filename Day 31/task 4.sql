CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);

INSERT INTO users (name, role) VALUES
('Alice', 'student'),
('Bob', 'teacher'),
('Charlie', 'student'),
('Diana', 'admin');

ALTER TABLE users
ADD COLUMN phone VARCHAR(20);

UPDATE users SET phone = '555-1111' WHERE name = 'Alice';
UPDATE users SET phone = '555-2222' WHERE name = 'Charlie';

SELECT * FROM users;
