CREATE VIEW high_scoring_students AS
SELECT 
    student_name,
    marks
FROM students
WHERE marks > 80;