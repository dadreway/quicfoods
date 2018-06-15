DROP DATABASE IF EXISTS EmployeeManager;
CREATE DATABASE EmployeeManager;
USE EmployeeManager;


CREATE TABLE employee(
    id int not null auto_increment,
    walletID varchar(30) not null,
    custName varchar(30) not null,
    tags varchar(30) not null,
    location varchar(30) not null,
    balance decimal(10,2) not null default '0',
    primary_key(id)
);