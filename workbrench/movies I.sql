/*SELECT
1. Mostrar todos los registros de la tabla de movies.
2. Mostrar el nombre, apellido y rating de todos los actores.
3. Mostrar el título de todas las series.
WHERE Y ORDER BY
4. Mostrar el nombre y apellido de los actores cuyo rating sea mayor a 7,5.
5. Mostrar el título de las películas, el rating y los premios de las películas con
un rating mayor a 7,5 y con más de dos premios.
6. Mostrar el título de las películas y el rating ordenadas por rating en forma
ascendente.
BETWEEN y LIKE
7. Mostrar el título y rating de todas las películas cuyo título incluya Toy Story.
8. Mostrar a todos los actores cuyos nombres empiecen con Sam.
9. Mostrar el título de las películas que salieron entre el ‘2004-01-01’ y
‘2008-12-31’.*/

SELECT *
FROM movies;

SELECT id, first_name, last_name, rating
FROM actors;

SELECT id, title
FROM series;

SELECT id, first_name, last_name, rating
FROM actors
WHERE rating > 7.5;

SELECT id, title, rating, awards
FROM movies
WHERE rating > 7.5 AND awards > 2;

SELECT id, title, rating
FROM movies
order by rating asc;

SELECT id, title, rating
FROM movies
WHERE title LIKE "%Toy Story%";

SELECT * 
FROM actors
WHERE first_name LIKE "Sam%";

SELECT *
FROM movies
WHERE release_date between '2004-01-01' AND '2008-12-31'


