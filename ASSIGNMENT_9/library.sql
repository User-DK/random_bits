CREATE DATABASE library;

USE library;

CREATE TABLE books (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255) NOT NULL,
    author VARCHAR(255) NOT NULL,
    year INT
);

INSERT INTO books (title, author, year)
VALUES ('The Great Gatsby', 'F. Scott Fitzgerald', 1925),
       ('To Kill a Mockingbird', 'Harper Lee', 1960),
       ('1984', 'George Orwell', 1949);
