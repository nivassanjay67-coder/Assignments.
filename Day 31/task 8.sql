SELECT 
    a.id AS assignment_id,
    a.title AS assignment_title,
    a.description,
    a.due_date,
    l.title AS lesson_title,
    c.title AS course_title
FROM assignments a
JOIN lessons l ON a.lesson_id = l.id
JOIN courses c ON l.course_id = c.id
WHERE c.id = 1;  