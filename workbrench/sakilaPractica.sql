SELECT concat(first_name, " ", last_name) AS nombre
FROM actor
limit 5;

SELECT concat(first_name, " ", last_name) AS nombre, email as correo
FROM customer
where active != 0;

select title, release_year, description
from film
where rental_duration > 5
order by rental_duration desc;

select * from rental
 where MONTH(rental_date) = 5 and YEAR(rental_date) = 2005;

select count(rental_id) as cantidad from rental;

select sum(amount) as total, count(rental_id) as Cantidad, avg(amount) as Importe_promedio from payment;
 
select customer_id, sum(amount) as gasto_total, count(rental_id) as total_rentas
from payment
group by customer_id
order by gasto_total desc
limit 10;

select customer_id, count(rental_id) as total_rentas, sum(amount) as monto_total
from payment
group by customer_id
having monto_total > 150

por mes de alquiler (rental_date de tabla rental), la cantidad de alquileres y la suma total pagada (amount de tabla payment) para el año de alquiler 2005 (rental_date de tabla rental). 

select date_format(rental_date, '%Y-%m') as fecha, count(rental_id) total_rentas, sum(amount) as monto_total
from rental
where year(rental_date) = '2005'
group by fecha

/*hacer join con payment y sumar el amount y sale  y no estresarse*/