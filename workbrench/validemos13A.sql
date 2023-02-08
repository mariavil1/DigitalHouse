SELECT count(id)
FROM clientes
where pais like "Brazil%";

select count(id)
FROM canciones
WHERE id_genero = 6;

SELECT sum(total)
FROM facturas;

SELECT bytes
FROM canciones
order by bytes asc;

SELECT id_cliente, sum(total)
FROM facturas
group by id_cliente;

/*SELECT avg(milisegundos)
FROM canciones
group by id_album; incompleto punto 4 validemos lo aprendido 13a*/

/*Hagamos una consulta en la base de datos donde muestre todos los registros que contengan canciones con sus géneros, 
Y que el compositor sea Willie Dixon, Y que tengan el género Blues.*/

SELECT canciones.id, canciones.nombre, id_genero, generos.id, generos.nombre
FROM canciones
INNER JOIN generos ON id_genero = generos.id
WHERE compositor like "Willie Dixon" AND id_genero like "6"