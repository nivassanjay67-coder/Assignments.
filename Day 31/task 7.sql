USE edu_platform;
CREATE TABLE IF NOT EXISTS lessons (
    id INT AUTO_INCREMENT PRIMARY KEY,
    course_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    content TEXT,
    FOREIGN KEY (course_id) REFERENCES courses(id)
);
INSERT INTO lessons (course_id, title, content) VALUES
(1, 'Algebra Basics', 'Introduction to algebraic expressions'),
(1, 'Linear Equations', 'Solving simple linear equations'),
(2, 'Chemical Reactions', 'Introduction to chemical reactions');
CREATE TABLE IF NOT EXISTS assignments (
    id INT AUTO_INCREMENT PRIMARY KEY,
    lesson_id INT NOT NULL,
    title VARCHAR(255) NOT NULL,
    description TEXT,
    due_date DATE,
    FOREIGN KEY (lesson_id) REFERENCES lessons(id)
);
INSERT INTO assignments (lesson_id, title, description, due_date) VALUES
(1, 'Algebra Practice 1', 'Solve exercises 1-10 from the workbook', '2025-11-25'),
(2, 'Linear Equations Worksheet', 'Complete worksheet on linear equations', '2025-11-28'),
(3, 'Reaction Report', 'Write a report on observed chemical reactions', '2025-12-02');
SELECT 
    a.id AS assignment_id,
    a.title AS assignment_title,
    a.due_date,
    l.title AS lesson_title,
    c.title AS course_title
FROM assignments a
JOIN lessons l ON a.lesson_id = l.id
JOIN courses c ON l.course_id = c.id;