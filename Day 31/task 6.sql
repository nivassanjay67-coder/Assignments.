USE edu_platform;
CREATE TABLE assignments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date DATE,
    FOREIGN KEY (course_id) REFERENCES courses(id)
);
INSERT INTO assignments (course_id, title, description, due_date) VALUES
(1, 'Algebra Homework', 'Complete problems 1-20 on page 42', '2025-11-30'),
(2, 'Science Lab Report', 'Write a lab report on chemical reactions', '2025-12-05');
SELECT a.id, a.title, a.description, a.due_date, c.title AS course_title
FROM assignments a
JOIN courses c ON a.course_id = c.id;