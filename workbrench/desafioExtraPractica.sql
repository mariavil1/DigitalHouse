/*1. Obtener los artistas que han actuado en una o más películas.
2. Obtener las películas donde han participado más de un artista según nuestra
base de datos.
3. Obtener aquellos artistas que han actuado en alguna película, incluso
aquellos que aún no lo han hecho, según nuestra base de datos.
4. Obtener las películas que no se le han asignado artistas en nuestra base de
datos.
5. Obtener aquellos artistas que no han actuado en alguna película, según
nuestra base de datos.
6. Obtener aquellos artistas que han actuado en dos o más películas según
nuestra base de datos.
7. Obtener aquellas películas que tengan asignado uno o más artistas, incluso
aquellas que aún no le han asignado un artista en nuestra base de datos.*/

/*punto 1
SELECT distinct
	concat(artista.nombre, " ", artista.apellido) as nombre_completo
FROM
    artista
        INNER JOIN
    artista_x_pelicula ON artista_id = artista.id
        INNER JOIN
    pelicula ON pelicula_id = pelicula.id
*/

/*punto 2. Obtener las películas donde han participado más de un artista según nuestra
base de datos.
select pelicula.titulo
from artista_x_pelicula INNER JOIN pelicula ON pelicula_id = pelicula.id 
group by (pelicula.id)
having count(pelicula.id) > 1
order by pelicula.id 
*/

/*punto 3  Obtener aquellos artistas que han actuado en alguna película, incluso
aquellos que aún no lo han hecho, según nuestra base de datos.

 SELECT distinct
	concat(artista.nombre, " ", artista.apellido) as nombre_completo, pelicula.titulo
FROM artista
LEFT JOIN artista_x_pelicula ON artista_id = artista.id
left join pelicula on pelicula.id = pelicula_id;

select * from artista;

*/

/*punto 4 Obtener las películas que no se le han asignado artistas en nuestra base de
datos.

SELECT pelicula.titulo
FROM pelicula
left JOIN artista_x_pelicula ON pelicula_id = pelicula.id
WHERE artista_id IS NULL
*/

/* punto 5 Obtener aquellos artistas que no han actuado en alguna película, según
nuestra base de datos.

SELECT 	
concat(artista.nombre, " ", artista.apellido) as nombre_completo
FROM artista_x_pelicula 
right JOIN artista  ON artista_id = artista.id
WHERE pelicula_id IS NULL
*/

/* punto 6 Obtener aquellos artistas que han actuado en dos o más películas según
nuestra base de datos.
select concat(artista.nombre, " ", artista.apellido) as nombre_completo
from artista_x_pelicula INNER JOIN artista ON artista_id = artista.id 
group by (artista.id)
having count(artista.id) > 1

igual que los otros puntos, como especificar que sean mas de 2 items?? :C panico, ya pude, ya mejor*/


/*7. Obtener aquellas películas que tengan asignado uno o más artistas, incluso
aquellas que aún no le han asignado un artista en nuestra base de datos.

SELECT 
 pelicula.titulo, concat(artista.nombre, " ", artista.apellido) as nombre_completo
FROM artista
inner JOIN artista_x_pelicula ON artista_id = artista.id
right join pelicula on pelicula.id = pelicula_id;

SELECT * fROM pelicula
*/



