-- 🌟 Exercise 1: DVD Rental
-- Instructions
-- Get a list of all the languages, from the language table.
SELECT * FROM language

-- Get a list of all films joined with their languages – select the following details : film title, description, and language name.
SELECT 
	title, 
	description,
	language.name as language
FROM film
JOIN language
ON film.language_id = language.language_id

-- Get all languages, even if there are no films in those languages – select the following details : film title, description, and language name.
SELECT 
	title, 
	description,
	language.name as language
FROM film
RIGHT JOIN language
ON film.language_id = language.language_id

-- Create a new table called new_film with the following columns : id, name. Add some new films to the table.
CREATE TABLE new_film (
	id serial primary key,
	name varchar(100) unique not null
)
INSERT INTO new_film(name) VALUES
	('The seventh seal'),
	('The shame'),
	('Sammer with Monica')

-- Create a new table called customer_review, which will contain film reviews that customers will make.
-- Think about the DELETE constraint: if a film is deleted, its review should be automatically deleted.
-- It should have the following columns:
-- review_id – a primary key, non null, auto-increment.
-- film_id – references the new_film table. The film that is being reviewed.
-- language_id – references the language table. What language the review is in.
-- title – the title of the review.
-- score – the rating of the review (1-10).
-- review_text – the text of the review. No limit on the length.
-- last_update – when the review was last updated.
CREATE TABLE customer_review (
	review_id serial PRIMARY KEY NOT NULL,
	film_id int REFERENCES new_film(id) ON DELETE CASCADE,
	language_id int REFERENCES language(language_id) ON DELETE CASCADE,
	title varchar(100),
	score smallint CHECK (score>0 and score<=10),
	review_text text,
	last_update date
)

-- Add 2 movie reviews. Make sure you link them to valid objects in the other tables.
INSERT INTO public.customer_review(
	film_id, language_id, title, score, review_text, last_update)
	VALUES
	(
		(SELECT id FROM new_film WHERE name like '%seal%'),
		(SELECT language_id FROM language WHERE name like 'Eng%'),
		'Review about The Seventh Seal',
		9,
		'Review text about The Seventh Seal',
		'2024-05-03'),
	(
		(SELECT id FROM new_film WHERE name like '%shame%'),
		(SELECT language_id FROM language WHERE name like 'It%'),
		'Review about The Shame',
		10,
		'Review text about The Shame',
		'2024-06-23');

-- Delete a film that has a review from the new_film table, what happens to the customer_review table?
DELETE FROM public.new_film
	WHERE name like '%seal%';   -- The corresponding record in customer_review table was deleted.


-- 🌟 Exercise 2 : DVD Rental
-- Instructions
-- Use UPDATE to change the language of some films. Make sure that you use valid languages.
UPDATE public.film
	SET 
	language_id=(SELECT language_id FROM language WHERE name like 'It%')
	WHERE title like 'Q%';

-- Which foreign keys (references) are defined for the customer table? How does this affect the way in which we INSERT into the customer table?
    -- There is one foreign keys (address_id). To insert a new record we need put address to the table 'address' and put to customer only address_id.

-- We created a new table called customer_review. Drop this table. Is this an easy step, or does it need extra checking?
    -- This is an easy step.

-- Find out how many rentals are still outstanding (ie. have not been returned to the store yet).
SELECT COUNT(rental_id)
	FROM public.rental
	WHERE return_date is null;

-- Find the 30 most expensive movies which are outstanding (ie. have not been returned to the store yet)
SELECT 
	film.title,
	film.rental_rate
FROM rental
JOIN inventory ON rental.inventory_id = inventory.inventory_id
JOIN film ON inventory.film_id = film.film_id
WHERE rental.return_date is null
ORDER BY film.rental_rate DESC
LIMIT 40

-- Your friend is at the store, and decides to rent a movie. He knows he wants to see 4 movies, but he can’t remember their names. Can you help him find which movies he wants to rent?
-- The 1st film : The film is about a sumo wrestler, and one of the actors is Penelope Monroe.
SELECT 
	film.title,
	film.description,
	film.rental_rate,
	actor.first_name,
	actor.last_name
FROM film
JOIN film_actor on film.film_id = film_actor.film_id
JOIN actor	on film_actor.actor_id = actor.actor_id
WHERE 
	film.description ilike '%sumo wrestler%'
	and actor.first_name = 'Penelope'
	and actor.last_name = 'Monroe'

-- The 2nd film : A short documentary (less than 1 hour long), rated “R”.
SELECT 
	film.title,
	film.description,
	film.rating,
	category.name
FROM film
JOIN film_category on film.film_id = film_category.film_id
JOIN category	on film_category.category_id = category.category_id
WHERE 
	film.rating = 'R'
	and category.name like 'Docum%'

-- The 3rd film : A film that his friend Matthew Mahan rented. He paid over $4.00 for the rental, and he returned it between the 28th of July and the 1st of August, 2005.
SELECT 
	film.title,
	film.description,
	film.rental_rate,
	rental.return_date,
	customer.last_name
FROM film
JOIN inventory on film.film_id = inventory.film_id
JOIN rental	on rental.inventory_id = inventory.inventory_id
JOIN customer on customer.customer_id = rental.customer_id
WHERE 
	customer.first_name ilike 'Matthew%'
	and customer.last_name like 'Mahan%'
	and film.rental_rate > 4
	and rental.return_date between '2005-07-28' and '2005-08-01';

-- The 4th film : His friend Matthew Mahan watched this film, as well. It had the word “boat” in the title or description, and it looked like it was a very expensive DVD to replace.
SELECT 
	film.title,
	film.description,
	film.rental_rate,
	rental.return_date,
	customer.last_name,
	film.replacement_cost
FROM film
JOIN inventory on film.film_id = inventory.film_id
JOIN rental	on rental.inventory_id = inventory.inventory_id
JOIN customer on customer.customer_id = rental.customer_id
WHERE 
	customer.first_name ilike 'Matthew%'
	and customer.last_name like 'Mahan%'
	and (film.title ilike '%boat%' or film.description ilike '%boat%')
ORDER BY film.replacement_cost DESC
LIMIT 1
