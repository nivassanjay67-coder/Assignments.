CREATE VIEW student_course_view AS
SELECT 
    s.student_id,
    s.student_name,
    c.course_name
FROM students AS s
JOIN courses  AS c ON s.course_id = c.course_id;
SELECT *
FROM student_course_view;