-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema Spotify
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema Spotify
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `Spotify` DEFAULT CHARACTER SET utf8 ;
USE `Spotify` ;

-- -----------------------------------------------------
-- Table `Spotify`.`Usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Usuarios` (
  `idUsuarios` INT NOT NULL AUTO_INCREMENT,
  `email` VARCHAR(45) NOT NULL,
  `contrasenia` INT NOT NULL,
  `sexo` VARCHAR(45) NOT NULL,
  `codigo_postal` INT NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  `fecha_act_contrasenia` DATETIME NOT NULL,
  PRIMARY KEY (`idUsuarios`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Plan`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Plan` (
  `idPlan` INT NOT NULL AUTO_INCREMENT,
  `tipo_plan` VARCHAR(45) NOT NULL,
  `Usuarios_idUsuarios` INT NOT NULL,
  PRIMARY KEY (`idPlan`),
  INDEX `fk_Plan_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) VISIBLE,
  CONSTRAINT `fk_Plan_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Spotify`.`Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Playlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Playlist` (
  `idPlaylist` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `nro_canciones` INT NOT NULL,
  `fecha_creacion` DATE NOT NULL,
  PRIMARY KEY (`idPlaylist`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Discografias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Discografias` (
  `idDiscografias` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `pais` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idDiscografias`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Albunes`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Albunes` (
  `idAlbunes` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `anio_publicacion` INT NOT NULL,
  `discografia` VARCHAR(45) NOT NULL,
  `imagen_portada` VARCHAR(45) NOT NULL,
  `Discografias_idDiscografias` INT NOT NULL,
  PRIMARY KEY (`idAlbunes`),
  INDEX `fk_Albunes_Discografias1_idx` (`Discografias_idDiscografias` ASC) VISIBLE,
  CONSTRAINT `fk_Albunes_Discografias1`
    FOREIGN KEY (`Discografias_idDiscografias`)
    REFERENCES `Spotify`.`Discografias` (`idDiscografias`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Artistas`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Artistas` (
  `idArtistas` INT NOT NULL AUTO_INCREMENT,
  `nombre` VARCHAR(45) NOT NULL,
  `imagen` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`idArtistas`))
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Canciones`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Canciones` (
  `idCanciones` INT NOT NULL AUTO_INCREMENT,
  `titulo` VARCHAR(45) NOT NULL,
  `duracion` INT NOT NULL,
  `cantidad_reproducciones` INT NOT NULL,
  `cantidad_likes` INT NOT NULL,
  `Playlist_idPlaylist` INT NOT NULL,
  `Albunes_idAlbunes` INT NOT NULL,
  `Artistas_idArtistas` INT NOT NULL,
  PRIMARY KEY (`idCanciones`),
  INDEX `fk_Canciones_Playlist1_idx` (`Playlist_idPlaylist` ASC) VISIBLE,
  INDEX `fk_Canciones_Albunes1_idx` (`Albunes_idAlbunes` ASC) VISIBLE,
  INDEX `fk_Canciones_Artistas1_idx` (`Artistas_idArtistas` ASC) VISIBLE,
  CONSTRAINT `fk_Canciones_Playlist1`
    FOREIGN KEY (`Playlist_idPlaylist`)
    REFERENCES `Spotify`.`Playlist` (`idPlaylist`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Canciones_Albunes1`
    FOREIGN KEY (`Albunes_idAlbunes`)
    REFERENCES `Spotify`.`Albunes` (`idAlbunes`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Canciones_Artistas1`
    FOREIGN KEY (`Artistas_idArtistas`)
    REFERENCES `Spotify`.`Artistas` (`idArtistas`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Usuarios_playlist`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Usuarios_playlist` (
  `idUsuarios_playlist` INT NOT NULL AUTO_INCREMENT,
  `tipo_playlist` INT NOT NULL,
  `fecha_eliminacion` DATETIME NOT NULL,
  `Usuarios_idUsuarios` INT NOT NULL,
  `Playlist_idPlaylist` INT NOT NULL,
  PRIMARY KEY (`idUsuarios_playlist`),
  INDEX `fk_Usuarios_playlist_Usuarios1_idx` (`Usuarios_idUsuarios` ASC) VISIBLE,
  INDEX `fk_Usuarios_playlist_Playlist1_idx` (`Playlist_idPlaylist` ASC) VISIBLE,
  CONSTRAINT `fk_Usuarios_playlist_Usuarios1`
    FOREIGN KEY (`Usuarios_idUsuarios`)
    REFERENCES `Spotify`.`Usuarios` (`idUsuarios`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_Usuarios_playlist_Playlist1`
    FOREIGN KEY (`Playlist_idPlaylist`)
    REFERENCES `Spotify`.`Playlist` (`idPlaylist`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `Spotify`.`Generos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `Spotify`.`Generos` (
  `idGeneros` INT NOT NULL AUTO_INCREMENT,
  `Genero` VARCHAR(45) NULL,
  `Canciones_idCanciones` INT NOT NULL,
  PRIMARY KEY (`idGeneros`),
  INDEX `fk_Generos_Canciones1_idx` (`Canciones_idCanciones` ASC) VISIBLE,
  CONSTRAINT `fk_Generos_Canciones1`
    FOREIGN KEY (`Canciones_idCanciones`)
    REFERENCES `Spotify`.`Canciones` (`idCanciones`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
