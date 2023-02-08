/*1. Mostrar el título de todas las series y usar alias para que tanto el nombre de la
tabla como el campo estén en español.
2. Traer el título de las películas con el rating mayor a 3, con más de 1 premio y con
fecha de lanzamiento entre el año 1988 al 2009. Ordenar los resultados por
rating.
3. Traer el top 3 a partir del registro 10 de la consulta anterior.
4. ¿Cuáles son los 3 peores episodios teniendo en cuenta su rating?
5. Obtener el listado de todos los actores. Quitar las columnas de fechas y película
favorita, además traducir los nombres de las columnas.*/
SELECT title AS titulo
FROM series;

SELECT id, title, rating, awards
FROM movies
WHERE rating > 3 AND awards > 1
ORDER BY rating ASC
LIMIT 3
OFFSET 10;

SELECT id, title, rating
FROM episodes
ORDER BY rating asc
limit 3;

SELECT id, concat(first_name, " ", last_name) AS nombre_completo, rating AS puntaje
FROM actors





