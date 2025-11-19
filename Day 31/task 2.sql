create database company_db;

use company_db;

create table department(
id Int primary key auto_increment,
name varchar(50),
description varchar(50)
);

select * from department;

insert into department (id, name, description)
values(1,"sanjay","He is a good asset"),
(2,"divya","She is good at learing"),
(3,"kishore","He is a great at coding");