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

SELECT * FROM users
WHERE role = 'student';