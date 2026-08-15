-- Run this in phpMyAdmin / MySQL before testing Unit 3 & 4 practicals
CREATE DATABASE IF NOT EXISTS php_lab_db;
USE php_lab_db;

CREATE TABLE IF NOT EXISTS users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullname VARCHAR(100),
    email VARCHAR(100),
    username VARCHAR(50) UNIQUE,
    password VARCHAR(255)
);

CREATE TABLE IF NOT EXISTS students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100),
    course VARCHAR(100),
    marks INT
);

-- Sample data for students table (used by select/update/delete/limit practicals)
INSERT INTO students (name, course, marks) VALUES
('Rajat Patel', 'BCA', 88),
('Aman Shah', 'BCA', 75),
('Priya Mehta', 'BCA', 92),
('Karan Joshi', 'BCA', 65),
('Neha Desai', 'BCA', 80);
