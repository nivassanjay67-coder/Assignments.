SELECT EmployeeID,
       FirstName,
       LastName,
       HireDate
FROM Employees
WHERE YEAR(HireDate) = 2022;