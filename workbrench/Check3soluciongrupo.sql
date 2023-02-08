#1- Generar un reporte , que indique la cantidad de usuario por país, mostrando el nombre del país y su cantidad.
SELECT pais.nombre, COUNT(*)
FROM usuario
INNER JOIN pais ON Pais_idPais = pais.idPais
GROUP BY Pais_idPais;
#2- Mostrar el Top 5 de avatars utilizados por los usuarios, listando el nombre del avatar y la cantidad de veces utilizado.
SELECT avatar.nombre, COUNT(*) AS cantidad
FROM avatar
INNER JOIN usuario ON Avatar_idAvatar = avatar.idAvatar
GROUP BY Avatar_idAvatar
ORDER BY cantidad DESC
limit 5;
#3- Emitir un listado de todas las playlist públicas
#, informado el nombre del usuario que la creó, el título de cada video que 
#posee y el nombre de y  año de creación de la playlist.
SELECT usuario.nombre, video.titulo, idPlaylist, playlist.nombre, playlist.fechaCreacion
FROM playlist
INNER JOIN usuario ON Usuario_idUsuario = usuario.idUsuario
INNER JOIN playlist_video ON Playlist_idPlaylist = playlist.idPlaylist
INNER JOIN video ON Video_idVideo = video.idVideo
WHERE playlist.privado = 0;
-- 4. Listar las 10 etiquetas menos usadas.
SELECT Etiqueta_idEtiqueta, count(etiqueta.idEtiqueta) AS total_etiquetas, etiqueta.nombre
FROM video_etiqueta
INNER JOIN etiqueta ON Etiqueta_idEtiqueta = etiqueta.idEtiqueta
group by idEtiqueta
order by total_etiquetas asc
limit 10;
#5- Generar un reporte de las últimas 10 reacciones, listando la fecha, el nombre de la reacción , 
#el id de usuario y nombre de usuario y el titulo del video.
SELECT reaccion.fecha, tiporeaccion.nombre, usuario.idUsuario, usuario.nombre, video.titulo
FROM reaccion
INNER JOIN usuario ON Usuario_idUsuario = usuario.idUsuario
INNER JOIN tiporeaccion ON TipoReaccion_idTipoReaccion = tiporeaccion.idTipoReaccion
INNER JOIN video ON Video_idVideo = video.idVideo
ORDER BY reaccion.fecha desc
limit 10;
#6- Mostrar por usuario, la cantidad de playlist que posee, pero solo para aquellos que tengan 
#más de 1 playlist y la fecha de creación sea durante el 2021.
SELECT COUNT(usuario.idUsuario) AS total_playlist, usuario.nombre, playlist.fechaCreacion
FROM playlist
INNER JOIN usuario ON Usuario_idUsuario = usuario.idUsuario
where fechaCreacion between '2021-01-01 00:00:00' AND '2021-12-31 00:00:00'
group by idUsuario
having total_playlist >1;
#7- Generar un reporte de las reacciones generadas en el 2021, 
#con el siguiente formato : Nombre de Reacción,Nombre de Usuario,Título de Video,Fecha
SELECT tiporeaccion.nombre AS nombre_reaccion, usuario.nombre AS nombre_usuario, video.titulo AS titulo_video, reaccion.fecha
FROM reaccion
INNER JOIN tiporeaccion ON TipoReaccion_idTipoReaccion = tiporeaccion.idTipoReaccion
INNER JOIN usuario ON Usuario_idUsuario = usuario.idUsuario
INNER JOIN video ON Video_idVideo = video.idVideo
WHERE reaccion.fecha between '2021-01-01 00:00:00' AND '2021-12-31 23:59:59';
#8- Listar la cantidad de videos que según sean públicos o privados.
SELECT CASE WHEN privado = 1 THEN 'Privado' WHEN privado = 0 THEN 'Publico' END AS tipo_video, COUNT(*) AS Cantidad 
FROM video GROUP BY tipo_video;
#9- Generar un reporte con los nombres de los usuario que no poseen ninguna Playlist.
SELECT usuario.nombre
FROM playlist
right JOIN usuario ON Usuario_idUsuario = usuario.idUsuario
WHERE idPlaylist IS NULL;
#10- Listar todos los videos hayan o no recibido reacciones en el último mes; indicar cuántas reacciones tuvieron y si han sido reproducidos o no. 
#El listado debe estar ordenado alfabéticamente por título del vídeo.
SELECT video.titulo, count(reaccion.TipoReaccion_idTipoReaccion) AS cantidad_reacciones, fecha,
CASE 
WHEN cantidadReproducciones > 0 THEN 'SI'
        ELSE 'NO'
	END AS Reproducido
FROM reaccion
right JOIN video ON Video_idVideo = video.idVideo
WHERE cantidadReproducciones > 0 AND fecha BETWEEN  date_add(now(), INTERVAL -1 MONTH) AND now()
group by video.titulo
order by titulo asc;
#11- Generar un reporte con el nombre del usuario  y el título del vídeo que no pertenecen a ninguna playlist.
SELECT usuario.nombre, video.titulo 
FROM usuario 
INNER JOIN video ON usuario.idUsuario = video.Usuario_idUsuario
LEFT JOIN playlist_video ON playlist_video.Video_idVideo = video.idVideo 
LEFT JOIN playlist ON playlist_video.Playlist_idPlaylist = playlist.idPlaylist
WHERE playlist_video.Playlist_idPlaylist IS NULL;
#12- Listar a todos los usuarios que no poseen ningún video.
SELECT usuario.idUsuario, usuario.nombre
FROM usuario
LEFT JOIN video ON video.Usuario_idUsuario = usuario.idUsuario
where Usuario_idUsuario is null;
#13 Listar la cantidad total de reacciones por cada tipo de reacción,
# en el período del 01-01-2021 al 01-04-2021.
SELECT nombre, count(*) AS cantidad_reacciones
FROM reaccion
INNER JOIN tiporeaccion ON reaccion.TipoReaccion_idTipoReaccion = tiporeaccion.idTipoReaccion
where fecha between '2021-01-01 00:00:00' and '2021-04-01 00:00:00'
group by nombre;
#14- Listar los videos que tienen los usuarios cuyo nombre contiene la letra “a” y son del país Argentina.
SELECT titulo, usuario.nombre
FROM video
INNER JOIN usuario ON video.Usuario_idUsuario = usuario.idUsuario
INNER JOIN pais ON usuario.Pais_idPais = pais.idPais
WHERE usuario.nombre like '%a%' AND pais.nombre like '%Argentina%';
#15- Generar un informe estilo ranking de avatars utilizados por país.
SELECT avatar.nombre, pais.nombre, count(idAvatar) as cantidad_avatar
FROM usuario
INNER JOIN pais ON usuario.Pais_idPais = pais.idPais
INNER JOIN avatar ON usuario.Avatar_idAvatar = avatar.idAvatar
group by avatar.nombre, pais.nombre
order by cantidad_avatar desc;
#16- Generar un reporte de todos los videos, mostrando los que poseen reacciones 
#y cuántas veces han sido reproducidos.
SELECT idVideo, titulo, cantidadReproducciones
FROM video
LEFT JOIN reaccion ON reaccion.Video_idVideo = video.idVideo
-- WHERE cantidadLikes > 0 AND cantidadDislikes > 0
group by titulo;
# 17- Mostrar los 5 videos de menor duración, listando el título del vídeo 
#y el nombre de usuario y país al que corresponde.
SELECT titulo, usuario.nombre as nombre_usuario, pais.nombre as nombre_pais, duracion
FROM video
INNER JOIN usuario ON video.Usuario_idUsuario = usuario.idUsuario
INNER JOIN pais ON usuario.Pais_idPais = pais.idPais
ORDER BY duracion ASC limit 5;
#18- Listar el usuario con más reacciones,durante el 2021 y  que sea de Brasil.
SELECT *








































