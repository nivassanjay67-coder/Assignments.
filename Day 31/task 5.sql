CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    role VARCHAR(50) NOT NULL
);
CREATE TABLE courses (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL
);
CREATE TABLE enrollments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT NOT NULL,
    course_id INT NOT NULL,
    FOREIGN KEY (user_id) REFERENCES users(id),
    FOREIGN KEY (course_id) REFERENCES courses(id)
);
INSERT INTO users (name, role) VALUES
('Alice', 'student'),
('Bob', 'student'),
('Mr. Smith', 'teacher');
INSERT INTO courses (title) VALUES
('Mathematics'),
('Science');
INSERT INTO enrollments (user_id, course_id) VALUES
(1, 1), 
(1, 2),  
(2, 1);  
SELECT 
    users.id AS student_id,
    users.name AS student_name,
    courses.id AS course_id,
    courses.title AS course_title
FROM users
JOIN enrollments ON users.id = enrollments.user_id
JOIN courses ON enrollments.course_id = courses.id
WHERE users.role = 'student';