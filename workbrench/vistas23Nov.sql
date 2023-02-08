SELECT * FROM canciones;

SELECT 
UPPER(LEFT(nombre, 10)) AS Cancion,
CONCAT(TIMESTAMPDIFF(YEAR, publicada, NOW()), ' ANIOS') AS Antiguedad,
round((bytes / 1024), 0) AS KB,
CONCAT('$ ', FORMAT(precio_unitario, 3)) AS Precio,
(
CASE
WHEN compositor = '' OR compositor IS NULL THEN '<SIN DATOS>'
WHEN compositor NOT LIKE '%,%' THEN compositor
ELSE LEFT(compositor, LOCATE(',', compositor) -1)
END
) AS Compositor
FROM canciones;

-- traer el ultimo compositor
SELECT RIGHT (compositor, LOCATE(',', REVERSE(compositor)) - 2), compositor
FROM canciones;