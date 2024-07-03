-- https://academy.hackthebox.com/module/33/section/192

--  In the 'titles' table, what is the number of records WHERE the employee number is greater than 10000 OR their title does NOT contain 'engineer'?
describe titles;
select count(*) from titles where emp_no > 10000 || title not like '%engineer%';
-- 654