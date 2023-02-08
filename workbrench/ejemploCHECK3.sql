/*1. Listar los servicios básicos de la habitación número 25*/
SELECT * 
FROM habitacion_X_servicio_basico
WHERE habitacion_numero = 25;
/*2. Listar absolutamente todos los servicios básicos y la cantidad de habitaciones en
las que están instalados. Mostrar sólo el nombre del servicio básico y cantidad.*/
SELECT servicio_basico.nombre, count(*)
FROM habitacion_x_servicio_basico
INNER JOIN servicio_basico ON servicio_basico_id = servicio_basico.id
group by servicio_basico.nombre;
/*3. Listar todos los huéspedes que tengan tres o más check-in. Mostrar el número
de huésped, apellido y nombre separado por un espacio dentro de una misma
columna denominada "Cliente" y, la cantidad de check-in que posee.*/
SELECT count(reserva.huesped_id) AS cantidad_Check, concat(huesped.id, ' ', apellido, ' ', nombre) AS cliente
FROM huesped
INNER JOIN reserva ON huesped_id = huesped.id
GROUP BY reserva.huesped_id
HAVING cantidad_Check >= 3;
/*4. Listar todos los huéspedes que no tengan un check-in. Mostrar el número de
huésped, apellido y nombre en mayúsculas dentro de una misma columna
denominada "huésped sin check-in".*/
SELECT count(reserva.huesped_id) AS cantidad_Check, concat(huesped.id, ' ', apellido, ' ', nombre) AS cliente_sin_checkin
FROM UPPER huesped
INNER JOIN reserva ON huesped_id = huesped.id
GROUP BY reserva.huesped_id
HAVING cantidad_Check = null
/*5. Listar todos los huéspedes que tengan al menos un check-in que corresponda a
la habitación de clase 'Classic'. Se debe mostrar el número de huésped, apellido,
nombre, número de habitación y la clase.*/
/*6. Listar los huéspedes que tengan una o más reservas y que en la segunda letra de
su apellido contenga una "u". Se debe mostrar el número de huésped, apellido,
nombre, nombre del servicio.
7. Listar absolutamente todos los países y la cantidad de huéspedes que tengan.
8. Calcular el importe total y la cantidad de reservas realizadas en el mes de marzo
por cada huésped. Mostrar el apellido del huésped, importe total y cantidad de
reservas.
9. Calcular el importe total recaudado por mes (fecha de entrada) para la
habitación número 22. Mostrar el número de habitación, nombre de la
decoración, clase, nombre del mes y el importe total.
10. Determinar la recaudación total por país para las habitaciones número 5, 10 y
22. Mostrar nombre del país, número de habitación y el total recaudado.
11. Calcular la recaudación total de cada forma de pago para las reservas. Mostrar la
forma de pago y el total.
12. Listar los empleados del sector 'administración' que su país de origen sea
'Argentina'. Mostrar el número de legajo, apellido, la primera inicial del primer
nombre y un punto, nombre de su país de origen y el nombre del sector.
13. Listar todos los servicios básicos que tienen las habitaciones (desde la 20 hasta
la 24) y su clase. Mostrar número de habitación, clase y el nombre de los
servicios básicos. Ordenar por número de habitación y servicio.
14. Listar las decoraciones que no están aplicadas en ninguna habitación.
15. Listar todos los empleados categorizándolos por edad. Las categorías son:
'junior' (hasta 35 años), 'semi-senior' (entre 36 a 40 años) y 'senior' (más de 40).
Mostrar el apellido, nombre, edad, categoría y ordenar por edad.
16. Calcular la cantidad y el promedio de cada forma de pago para los check-in.
Mostrar la forma de pago, cantidad y el promedio formateado con dos
decimales.
17. Calcular la edad de los empleados de Argentina. Mostrar el apellido, nombre y la
edad del empleado.
18. Calcular el importe total para los check-in realizados por el huésped 'Mercado
Joel'. Mostrar apellido, nombre, importe total y el país de origen.
19. Listar la forma de pago empleada por cada servicio extra. Se debe mostrar el
nombre del servicio extra, nombre de la forma de pago y calcular la cantidad y
total recaudado.
20. Listar la forma de pago empleada para el servicio extra 'Sauna' y los huéspedes
correspondientes. Se debe mostrar el nombre del servicio extra, nombre de la
forma de pago, número del cliente e importe total.*/




