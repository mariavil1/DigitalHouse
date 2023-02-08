#CheckPoint 3 - Solución 

#1- Generar un reporte , que indique la cantidad de usuario por país, mostrando el nombre del país y su cantidad.

SELECT p.idPais, p.nombre, COUNT(u.idUsuario)  
FROM usuario u 
INNER JOIN pais p 
	ON u.pais_idPais = p.idPais 
GROUP BY p.idPais, p.nombre;

#2- Mostrar el Top 5 de avatars utilizados por los usuarios, listando el nombre del avatar y la cantidad de veces utilizado.

SELECT a.idAvatar, a.nombre, COUNT(u.idUsuario) as cantidad 
FROM usuario u 
INNER JOIN avatar a 
	ON u.Avatar_idAvatar = a.idAvatar 
GROUP BY a.idAvatar, a.nombre 
ORDER BY cantidad DESC LIMIT 5;

#3- Emitir un listado de todas las playlist públicas
#, informado el nombre del usuario que la creó, el título de cada video que 
#posee y el nombre de y  año de creación de la playlist.

SELECT p.nombre as Playlist, u.nombre as NombreUsuario, v.titulo as TituloVideo, extract(year from p.fechaCreacion) as AñoDeCreacion
FROM playlist p 
INNER JOIN usuario u 
	ON p.Usuario_idUsuario = u.idUsuario 
INNER JOIN playlist_video pv 
	ON pv.Playlist_idPlaylist = p.idPlaylist
INNER JOIN video v 
	ON pv.Video_idVideo = v.idVideo 
WHERE p.privado = 0;

#4- Listar las 10 etiquetas menos usadas.

SELECT Etiqueta_idEtiqueta,e.nombre ,COUNT(*)  as cantidad 
FROM video_etiqueta ve 
INNER JOIN etiqueta e 
	ON ve.Etiqueta_idEtiqueta = e.idEtiqueta
GROUP BY Etiqueta_idEtiqueta,e.nombre
ORDER BY cantidad ASC LIMIT 10;

#5- Generar un reporte de las últimas 10 reacciones, listando la fecha, el nombre de la reacción , 
#el id de usuario y nombre de usuario y el titulo del video.

SELECT r.fecha, tr.nombre as NombreReaccion, u.idUsuario, u.nombre as NombreUsuario, v.titulo 
FROM reaccion r 
INNER JOIN tiporeaccion tr 
	ON r.TipoReaccion_idTipoReaccion = tr.idTipoReaccion 
INNER JOIN usuario u 
	ON r.Usuario_idUsuario = u.idUsuario 
INNER JOIN video v 
	ON r.Video_idVideo = v.idVideo
ORDER BY r.fecha DESC LIMIT 10;

#6- Mostrar por usuario, la cantidad de playlist que posee, pero solo para aquellos que tengan 
#más de 1 playlist y la fecha de creación sea durante el 2021.

SELECT 
	u.idUsuario, u.nombre as NombreUsuario, COUNT(*) as cantidadPlayList
FROM usuario u 
INNER JOIN playlist p 
	ON p.Usuario_idUsuario = u.idUsuario
WHERE p.fechaCreacion BETWEEN '2021-01-01 00:00:00' AND '2021-12-31 23:59:59'
GROUP BY u.idUsuario, u.nombre
HAVING COUNT(*) >1;

#7- Generar un reporte de las reacciones generadas en el 2021, 
#con el siguiente formato : Nombre de Reacción,Nombre de Usuario,Título de Video,Fecha

SELECT tr.nombre AS NombreReaccion, u.nombre AS NombreDeUsuario, v.titulo AS TituloDeVideo, r.fecha 
FROM reaccion r 
INNER JOIN tiporeaccion tr 
	ON r.TipoReaccion_idTipoReaccion = tr.idTipoReaccion 
INNER JOIN usuario u 
	ON r.Usuario_idUsuario = u.idUsuario 
INNER JOIN video v 
	ON r.Video_idVideo = v.idVideo
WHERE r.fecha BETWEEN '2021-01-01 00:00:0' AND '2021-12-31 23:59:59';

#8- Listar la cantidad de videos que según sean públicos o privados.

SELECT CASE WHEN privado = 1 THEN 'Privado' WHEN privado= 0 THEN 'Publico' END AS Privado, COUNT(*) AS Cantidad 
FROM video GROUP BY privado ;

#9- Generar un reporte con los nombres de los usuario que no poseen ninguna Playlist.

SELECT u.nombre AS NombreUsuario 
FROM usuario u 
LEFT JOIN playlist p 
	ON u.idUsuario = p.Usuario_idUsuario
WHERE p.idPlaylist IS NULL;

#10- Listar todos los videos hayan o no recibido reacciones en el último mes; indicar cuántas reacciones tuvieron y si han sido reproducidos o no. 
#El listado debe estar ordenado alfabéticamente por título del vídeo.
SELECT v.idVideo, v.titulo, COUNT(r.idReaccion) AS CantidadReaccion, 
	CASE
		WHEN cantidadReproducciones > 0 THEN 'SI'
        ELSE 'NO'
	END AS Reproducido
FROM video v 
LEFT JOIN reaccion r 
	ON v.idVideo = r.Video_idVideo 
WHERE v.cantidadReproducciones>0
AND r.fecha BETWEEN  date_add(now(), INTERVAL -1 MONTH) AND now()
GROUP BY v.idVideo, v.titulo
ORDER BY v.titulo ASC;

#11- Generar un reporte con el nombre del usuario  y el título del vídeo que no pertenecen a ninguna playlist.

SELECT u.nombre, v.titulo 
FROM usuario u 
INNER JOIN video v 
	ON u.idUsuario = v.Usuario_idUsuario
LEFT JOIN playlist_video pv 
	ON pv.Video_idVideo = v.idVideo 
LEFT JOIN playlist p 
	ON pv.Playlist_idPlaylist = p.idPlaylist
WHERE pv.Playlist_idPlaylist IS NULL ;

#12- Listar a todos los usuarios que no poseen ningún video.

SELECT u.idUsuario, u.nombre 
FROM usuario u 
LEFT JOIN video v 
	ON u.idUsuario = v.Usuario_idUsuario 
WHERE v.idVideo IS NULL;

#13 Listar la cantidad total de reacciones por cada tipo de reacción,
# en el período del 01-01-2021 al 01-04-2021.

SELECT tr.nombre, COUNT(*) 
FROM reaccion r 
INNER JOIN tiporeaccion tr 
	ON r.TipoReaccion_idTipoReaccion = tr.idTipoReaccion 
WHERE r.fecha BETWEEN '2021-01-01' AND '2021-04-01'  
GROUP BY tr.nombre;

#14- Listar los videos que tienen los usuarios cuyo nombre contiene la letra “a” y son del país Argentina.

SELECT v.titulo 
FROM usuario u 
INNER JOIN pais p 
	ON u.Pais_idPais = p.idPais 
INNER JOIN video v on u.idUsuario = v.Usuario_idUsuario    
WHERE p.nombre = 'Argentina' AND u.nombre like '%a%';

#15- Generar un informe estilo ranking de avatars utilizados por país.

SELECT a.nombre AS  Avatar, p.nombre AS Pais, COUNT(*) AS cantidad 
FROM usuario u 
INNER JOIN pais p 
	ON u.Pais_idPais= p.idPais 
INNER JOIN avatar a 
	ON u.Avatar_idAvatar = a.idAvatar
GROUP BY a.nombre, p.nombre
ORDER BY cantidad DESC;

#16- Generar un reporte de todos los videos, mostrando los que poseen reacciones 
#y cuántas veces han sido reproducidos.

SELECT DISTINCT  v.idVideo, v.titulo, v.cantidadReproducciones
FROM video v 
INNER JOIN reaccion r 
	ON v.idVideo = r.Video_idVideo;

# 17- Mostrar los 5 videos de menor duración, listando el título del vídeo 
#y el nombre de usuario y país al que corresponde.

SELECT v.titulo AS TituloVideo, u.nombre AS NombreUsuario
, p.nombre AS Pais, v.duracion FROM video v
INNER JOIN usuario u ON u.idUsuario = v.Usuario_idUsuario
INNER JOIN pais p ON p.idPais = u.Pais_idPais
ORDER BY v.duracion LIMIT 5;




#18- Listar el usuario con más reacciones,durante el 2021 y  que sea de Brasil.
SELECT u.idUsuario, u.nombre as NombreUsuario,COUNT(*) as cantidad 
FROM reaccion r 
INNER JOIN usuario u 
	ON r.Usuario_idUsuario = u.idUsuario
INNER JOIN pais p 
	ON u.Pais_idPais = p.idPais
WHERE p.nombre = 'Brasil'
AND r.fecha BETWEEN '2021-01-01 00:00:0' AND '2021-12-31 23:59:59'
GROUP BY u.idUsuario, p.nombre
ORDER BY cantidad DESC LIMIT 1 ;

#19- Generar un reporte, listando los usuarios, sus canales, playlists y los videos que integran esas playlist.

SELECT u.nombre as NombreUsuario, c.nombre as Canal, p.nombre as PlayList, v.titulo as TituloVideo 
FROM usuario u 
LEFT JOIN canal c 
	ON u.idUsuario = c.Usuario_idUsuario 
INNER JOIN playlist p 
	ON p.Usuario_idUsuario = u.idUsuario
INNER JOIN playlist_video pv 
	ON p.idPlaylist = pv.Playlist_idPlaylist
INNER JOIN video v ON pv.Video_idVideo = v.idVideo;

#20- Listar todas las playlists que posean menos de 3 videos, mostrando el nombre de usuario y el avatar que posee.

SELECT p.nombre as PlayList, u.nombre as NombreUsuario, a.nombre as Avatar, COUNT(*)
FROM playlist p 
INNER JOIN playlist_video pv 
	ON p.idPlaylist = pv.Playlist_idPlaylist 
INNER JOIN video v 
	ON pv.Video_idVideo = v.idVideo
INNER JOIN usuario u 
	ON p.Usuario_idUsuario = u.idUsuario 
INNER JOIN avatar a 
	ON u.Avatar_idAvatar = a.idAvatar
GROUP BY p.nombre, u.nombre, a.nombre
HAVING COUNT(DISTINCT v.idVideo) <3;

