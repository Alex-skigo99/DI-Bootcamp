-- Instructions
-- You are going to practice tables relationships

-- Part I

-- Create 2 tables : Customer and Customer profile. They have a One to One relationship.

-- A customer can have only one profile, and a profile belongs to only one customer
-- The Customer table should have the columns : id, first_name, last_name NOT NULL
CREATE TABLE Customer (
	id serial PRIMARY KEY, 
	first_name VARCHAR(100), 
	last_name VARCHAR(100) NOT NULL
)

-- The Customer profile table should have the columns : id, isLoggedIn DEFAULT false (a Boolean), customer_id (a reference to the Customer table)
CREATE TABLE Customer_profile (
	id serial PRIMARY KEY,
	isLoggedIn BOOLEAN DEFAULT FALSE,
	customer_id INT REFERENCES Customer(id)
)

-- Insert those customers
-- John, Doe
-- Jerome, Lalu
-- Lea, Rive
INSERT INTO Customer(first_name, last_name) VALUES 
	('John', 'Doe'),
	('Jerome', 'Lalu'),
	('Lea', 'Rive');

-- Insert those customer profiles, use subqueries
-- John is loggedIn
-- Jerome is not logged in
INSERT INTO Customer_profile(isloggedin, customer_id) VALUES 
	(True, (SELECT id FROM Customer WHERE first_name = 'John')),
	(False, (SELECT id FROM Customer WHERE first_name = 'Jerome'));

-- Use the relevant types of Joins to display:

-- The first_name of the LoggedIn customers
SELECT first_name FROM Customer
INNER JOIN Customer_profile
ON Customer.id = Customer_profile.customer_id
WHERE Customer_profile.isloggedin

-- All the customers first_name and isLoggedIn columns - even the customers those who don’t have a profile.
SELECT Customer.first_name, Customer_profile.isloggedin FROM Customer
LEFT JOIN Customer_profile
ON Customer.id = Customer_profile.customer_id

-- The number of customers that are not LoggedIn
SELECT count(Customer.id) FROM Customer
LEFT JOIN Customer_profile
ON Customer.id = Customer_profile.customer_id
WHERE Customer_profile.isloggedin


-- Part II:

-- Create a table named Book, with the columns : book_id SERIAL PRIMARY KEY, title NOT NULL, author NOT NULL
CREATE TABLE Book (
	book_id SERIAL PRIMARY KEY,
	title VARCHAR(200) NOT NULL,
	author VARCHAR(100) NOT NULL
)

-- Insert those books :
-- Alice In Wonderland, Lewis Carroll
-- Harry Potter, J.K Rowling
-- To kill a mockingbird, Harper Lee
INSERT INTO BOOK(title,author)
VALUES
	('Alice In Wonderland', 'Lewis Carroll'),
	('Harry Potter', 'J.K Rowling'),
	('To kill a mockingbird', 'Harper Lee')

-- Create a table named Student, with the columns : student_id SERIAL PRIMARY KEY, name NOT NULL UNIQUE, age. Make sure that the age is never bigger than 15 (Find an SQL method);
CREATE TABLE Student (
	student_id SERIAL PRIMARY KEY,
	name VARCHAR(100) NOT NULL UNIQUE,
	age smallint CHECK (age <=15 and age > 0)
)

-- Insert those students:
-- John, 12
-- Lera, 11
-- Patrick, 10
-- Bob, 14
INSERT INTO Student(name, age)
VALUES
	('John', '12'),
	('Lera', '11'),
	('Patrick', '10'),
	('Bob', '14')

-- Create a table named Library, with the columns :
-- book_fk_id ON DELETE CASCADE ON UPDATE CASCADE
-- student_id ON DELETE CASCADE ON UPDATE CASCADE
-- borrowed_date
-- This table, is a junction table for a Many to Many relationship with the Book and Student tables : A student can borrow many books, and a book can be borrowed by many children
-- book_fk_id is a Foreign Key representing the column book_id from the Book table
-- student_fk_id is a Foreign Key representing the column student_id from the Student table
-- The pair of Foreign Keys is the Primary Key of the Junction Table
CREATE TABLE Library (
	book_fk_id int REFERENCES book(book_id) ON DELETE CASCADE ON UPDATE CASCADE,
	student_fk_id int REFERENCES student(student_id) ON DELETE CASCADE ON UPDATE CASCADE,
	borrowed_date date,
	CONSTRAINT book_student PRIMARY KEY (book_fk_id, student_fk_id)
)

-- Add 4 records in the junction table, use subqueries.
-- the student named John, borrowed the book Alice In Wonderland on the 15/02/2022
-- the student named Bob, borrowed the book To kill a mockingbird on the 03/03/2021
-- the student named Lera, borrowed the book Alice In Wonderland on the 23/05/2021
-- the student named Bob, borrowed the book Harry Potter the on 12/08/2021
INSERT INTO library(book_fk_id, student_fk_id, borrowed_date)
VALUES
	((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'), 
		(SELECT student_id FROM student WHERE name = 'John'), 
		'2022-02-15'),
	((SELECT book_id FROM book WHERE title = 'To kill a mockingbird'), 
		(SELECT student_id FROM student WHERE name = 'Bob'), 
		'2021-03-03'),
	((SELECT book_id FROM book WHERE title = 'Alice In Wonderland'), 
		(SELECT student_id FROM student WHERE name = 'Lera'), 
		'2021-05-23'),
	((SELECT book_id FROM book WHERE title = 'Harry Potter'), 
		(SELECT student_id FROM student WHERE name = 'Bob'), 
		'2021-08-12')

-- Display the data
-- Select all the columns from the junction table
SELECT * FROM library

-- Select the name of the student and the title of the borrowed books
SELECT student.name, book.title 
FROM student
JOIN library
ON student_id = student_fk_id
JOIN book
ON book_id = book_fk_id

-- Select the average age of the children, that borrowed the book Alice in Wonderland
SELECT AVG(age) 
FROM student
JOIN library
ON student_id = student_fk_id
JOIN book
ON book_id = book_fk_id
WHERE title = 'Alice In Wonderland'

-- Delete a student from the Student table, what happened in the junction table ?
DELETE FROM student
WHERE name = 'Bob'

            -- in the junction table a records were delete too, because it's fields have a property ON DELETE CASCADE