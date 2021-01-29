create database crudmysqlnode;

use crudmysqlnode;

create table customer(
    id int(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name varchar(50) NOT NULL,
    address varchar(100) NOT NULL,
    phone VARCHAR (15)
);


SHOW TABLES;


DESCRIBE customer;