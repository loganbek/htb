-- https://academy.hackthebox.com/module/33/section/191

-- What is the last name of the employee whose first name starts with "Bar" AND who was hired on 1990-01-01?
show tables;
describe employees;
select last_name from employees where first_name like 'Bar%' and hire_date = '1990-01-01';
-- Mitchem

