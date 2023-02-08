/*1. Listar todos los autores que tengan más de diez artículos en nuestra base de
datos. Mostrar apellido, nombre y la cantidad de artículos que posee.*/
SELECT autores.apellido, autores.nombre, count(autores_id) as cantidad_articulos
FROM autores
INNER JOIN articulos ON articulos.autores_id = autores.id
GROUP BY autores_id
HAVING cantidad_articulos > 10;
-- devuelve 4 resultados
/*2. Listar todos los autores que no tengan artículos publicados en el blog. Mostrar
apellido y nombre en mayúsculas dentro de una misma columna denominada
"Autor sin publicación".*/
SELECT upper(CONCAT(autores.apellido, ' ', autores.nombre)) AS Autor_sin_publicacion 
FROM autores
LEFT JOIN articulos ON articulos.autores_id = autores.id
WHERE articulos.autores_id IS NULL;
-- devuelve 29 resultados

/*3. Listar todos los autores que tengan al menos una publicación y que tengan
como origen el país Chile. Se debe mostrar el apellido, nombre, título del
artículo, fecha de la publicación del artículo, nombre de la ciudad y país.*/
SELECT autores.apellido, autores.nombre AS nombre_autor, articulos.titulo AS titulo_articulo, fechapublicacion, ciudad.nombre AS ciudad, pais.nombre AS pais, count(autores_id) as cantidad_articulos
FROM autores
LEFT JOIN articulos ON articulos.autores_id = autores.id
INNER JOIN ciudad ON autores.ciudad_id = ciudad.id
INNER JOIN pais ON ciudad.pais_id = pais.id
GROUP BY autores_id
HAVING cantidad_articulos > 1 AND pais LIKE 'Chile';
-- devuelve 4 resultados
/*4. Listar los autores que tengan uno o más artículos que no se encuentren
publicados es decir que el estado es igual a cero y que en la segunda letra de
su apellido contenga una "a".*/
SELECT autores.nombre, autores.apellido, articulos.estadoart
FROM autores
INNER JOIN articulos ON articulos.autores_id = autores.id
WHERE estadoart = 0 AND autores.apellido LIKE '_a%';
-- devuelve 9 resultados
/*5. Listar absolutamente todos los países y la cantidad de autores que tengan.*/
SELECT pais. nombre, count(pais.id)
FROM pais
INNER JOIN ciudad ON ciudad.pais_id = pais.id
INNER JOIN autores ON autores.ciudad_id = ciudad.id
group by pais.nombre;
-- devuelve 4 resultados
/*6. Queremos conocer los comentarios que contengan la palabra "muy bueno”, se
pide el nombre y apellido del usuario, título del artículo, el comentario y la
fecha de publicación del comentario.*/
SELECT * -- usuario.nombre, usuario.apellido, articulos.titulo, Cometario, comentarios.Fecha 
FROM comentarios
INNER JOIN articulos ON comentarios.articulos_id = articulos.id
INNER JOIN usuario ON comentarios.usuario_id = comentarios.id;
-- WHERE Cometario LIKE '%muy bueno%';
/*7. Se necesita conocer todas las especialidades del autor Martin Guillermina
Lucia.*/
SELECT especialidad.nombre, autores.nombre, autores.apellido
FROM especialidad
INNER JOIN especialidad_x_autores ON especialidad_x_autores.especialidad_id = especialidad.id
INNER JOIN autores ON especialidad_x_autores.autores_id = autores.id
WHERE autores.nombre LIKE 'Guillermina Lucia' AND autores.apellido LIKE 'Martín'
-- devuelve 4 resultados

