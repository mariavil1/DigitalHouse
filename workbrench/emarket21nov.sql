/* punto numero 1*/
SELECT facturas.FacturaID, facturas.FechaFactura, facturas.NombreEnvio, facturas.ClienteID, productos.CategoriaID, productos.ProductoNombre, productos.PrecioUnitario, productos.CantidadPorUnidad
FROM facturas
INNER JOIN facturadetallealbumesalbumesalbumesid
ON facturas.FacturaID = facturadetalle.FacturaID
INNER JOIN productos
ON productos.ProductoID= facturadetalle.ProductoID;

/*Listar todas las categorías junto con información de sus productos. Incluir todas
las categorías aunque no tengan productos. */

SELECT *  
FROM categorias
LEFT JOIN productos
ON categorias.CategoriaID = productos.CategoriaID;

/* Listar la información de contacto de los clientes que no hayan comprado nunca
en emarket. */

SELECT *
FROM clientes
LEFT JOIN facturas
ON clientes.ClienteID= facturas.ClienteID
WHERE facturas.ClienteID is null;
