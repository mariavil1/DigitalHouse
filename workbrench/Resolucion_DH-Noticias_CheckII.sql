-- ========================== PROYECTO DH-NOTICIAS ========================== --
-- =========================== RESOLUCION CHECKPOINT II ========================== --
-- Base de datos: dh-noticias.sql
-- Comando para habilitar la eliminación y actualización de registros: SET SQL_SAFE_UPDATES=0;

-- 1. Listar todos los autores cuyo nombre comience con la letra "A". Se debe mostrar id como "Número de Autor", apellido,nombre y su correo electronico.

SELECT id AS 'Número de Autor',  apellido, nombre,email  FROM autores
WHERE nombre LIKE 'A%';

-- 2. Mostrar el nombre,apellido y el password del usuario con telefono "5492645661478".

SELECT apellido, nombre, password  FROM usuario
WHERE telefono_movil = "5492645661478";

/*3. Calcular la cantidad de articulos o post que se encuentran inactivos (donde el estado es igual a cero) en nuestro blog.El Reporte debe tener dos columnas
"Estado" y "Cantidad de Articulos"*/

SELECT count(*) as "Cantidad de articulos", estadoart as Estado FROM `dh-noticias`.articulos
where estadoart = 0;

-- 4. Listar los recursos utilizados con números 8, 16, 29, 35.

SELECT * FROM recursos 
WHERE id IN (8, 16, 35, 85);

/* 5. Se requiere saber cuál es la fecha de publicacion del primer articulo de DH-Noticias, para este informe se requiere dos columnas con la
fecha de publicacion y el titulo del articulo*/

SELECT fechapublicacion as "Fecha de Publicacion", titulo as "Titulo del Articulo" 
FROM articulos
ORDER BY fechapublicacion
limit 1;

-- 6. Listar los nombres y la ubicacion de todos los recursos del tipo audio que se utilizaron en los articulos publicados

SELECT nombre_recurso as "Nombre del recurso", ruta as "Ubicacion " FROM recursos 
WHERE tiposrecursos_id = 1;

/*7 Listar de manera ordenada y ascendente por fecha de nacimiento, los usuarios que no sean oriundos de la ciudad "Las Condes-Santiago"
y que la fecha de nacimiento sea mayor que 3/9/1989 o igual a 7/11/1986.*/

SELECT * FROM usuario
WHERE ciudad_id <> 6 AND (fecha_nacimiento > '1989-09-03' OR fecha_nacimiento = '1986-11-07')
ORDER BY fecha_nacimiento;

 /*8. Listar los articulos de Deportes,especificamente de la subcategoria futbol  y que la fecha de alta 
 sea mayor que 5/09/21 o igual a 25/06/21. Ordenar por fecha de alta .*/
 
SELECT * FROM articulos 
WHERE subcategorias_id  = 2 AND (fechalta > '2021-09-5' OR fechalta = '2021-06-25')
ORDER BY fechalta;
 
 /*9.Listar todos los comentarios del mes de Octubre que contengan la palabra "Gracias", para este reporte necesitamos
mostrar la fecha de publicacion y el comentario */

SELECT Cometario as "Comentario", Fecha as "Fecha de Publicacion" FROM `dh-noticias`.comentarios
where cometario LIKE "%Gracias%" and  MONTH(Fecha) = 10;

-- 10.Mostrar el titulo y contenido del ultimo articulo publicado por el autor "Guillermina Lucia Martín"  

SELECT * from `dh-noticias`.articulos
where autores_id=13
order by fechapublicacion desc
limit 1;

-- 11. Listar los comentarios registrados entre 14/07/21 al 15/08/21 y ordenarlas por fecha teniendo en cuenta un orden de más antigua a reciente.

SELECT * FROM comentarios 
WHERE Fecha BETWEEN '2022-01-01' AND '2022-03-28' 
ORDER BY Fecha;

-- 12. Listar todos los autores cuyo nombre termine con los caracteres "ia". Se debe mostrar el apellido, nombre y teléfono móvil.

SELECT apellido, nombre, telefono_movil FROM autores 
WHERE nombre LIKE '%ina';
 
 -- 13. Calcular el total de articulos publicados en el año 2021 en DH-noticias 
 
 SELECT count(*) AS "Cantidad de articulos publicados" FROM `dh-noticias`.articulos
where  Year(fechapublicacion) = 2021;

-- 14. Mostrar el quinto articulo publicado mas antiguo durante el año 2022

SELECT * FROM articulos 
where  Year(fechapublicacion) = 2022
ORDER BY fechapublicacion 
LIMIT 1 OFFSET 4;

/* 15. La fecha de publicacion del primer post  que se realizo en DH-Noticias fue en  "2019-03-03" , lo que necesitamos calcular es cuantos dias
transcurrieron hasta el dia de hoy */

SELECT DATEDIFF(NOW(),'2019-03-03') as "Dias transcurridos" ;

-- 16. Mostrar todas las ciudades que contengan una palabra de cinco caracteres, pero el tercer carácter debe ser igual a "n".

SELECT * FROM ciudad 
WHERE nombre LIKE '% __n__ %' OR nombre LIKE '__n__ %' OR nombre LIKE '% __n__';

-- 17.  Modificar el tipo de categoria "Cultura y Arte" a solo "Cultura"

UPDATE categorias SET nombre_categoria = 'Cultura y Arte' 
WHERE nombre_categoria = 'Cultura';

-- 18 Listar el nombre de todas las categorias inactivas (el estado de la categoria es igual a cero) en nuestro blog

SELECT nombre_categoria as "Categorias Inactivas" FROM `dh-noticias`.categorias
where estado_categoria=0;

/*19. Agregar al usuario Aznar Ricardo Omar cuyo usuario es rica28,contraseña az123,proveniente de la ciudad de 'Las Heras - Mendoza',fecha de nacimiento 
5/1/1980,teléfono móvil +542645667714 y el correo electrónico es pal1980sj@gmail.com.*/

INSERT INTO usuario (id,ciudad_id,nombre,apellido, fecha_nacimiento, usuario, password,email,telefono_movil) VALUES 
(DEFAULT,4,'Ricardo Omar','Aznar','1980-01-05', 'rica28', 'az123','pal1980sj@gmail.com','+542645667714');

-- 20. Eliminar el registro del servicio básico número 8

DELETE FROM categorias WHERE nombre_categoria = 8;
DELETE FROM nombre_categoria  WHERE id = 8;