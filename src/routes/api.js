const {Router} = require('express');
const router2 = Router();

//Precondición: Ninguna (solo se accede en la ruta)
//Postcondición: Regresa la cantidad de agujetas que se necesitan para hacer los zapatos
router2.get('/agujetas', (req,res) => {
    res.send('Cuántas agujetas');
});

//Precondición: Ingresar un color de agujetas válido
//Postcondición: Regresa la cantidad de agujetas de un color particular que se necesitan para hacer los zapatos
router2.get('/agujetas/:color', (req,res) => {
    res.send('Cuántas agujetas de color '+req.params.color);
});

//Precondición: Ninguna (solo se accede en la ruta)
//Postcondición: Regresa la cantidad de suelas que se necesitan para hacer los zapatos
router2.get('/suelas', (req,res) => {
    res.send('Cuántas suelas');
});

//Precondición: Ingresar un color de suela válido
//Postcondición: Regresa la cantidad de suelas de un color particular que se necesitan para hacer los zapatos
router2.get('/suelas/:color', (req,res) => {
    res.send('Cuántas suelas de color '+req.params.color);
});

//Precondición: Ninguna (solo se accede en la ruta)
//Postcondición: Regresa la cantidad de telas que se necesitan para hacer los zapatos
router2.get('/telas', (req,res) => {
    res.send('Cuántas telas');
});

//Precondición: Ingresar un color de tela válido
//Postcondición: Regresa la cantidad de telas de un color particular que se necesitan para hacer los zapatos
router2.get('/telas/:color', (req,res) => {
    res.send('Cuántas telas de color '+req.params.color);
});

//Precondición: Ninguna (solo se accede en la ruta)
//Postcondición: Regresa la cantidad de zapatos que faltan por fabricar
router2.get('/zapatos', (req,res) => {
    res.send('Cuántos zapatos que ensamblar');
});

//Precondición: Ingresar un identificador de zapato válido (cadena alfanumérica)
//Postcondición: Regresa la cantidad y los tipos de piezas que se necesitan para fabricar uno de los zapatos
router2.get('/zapatos/:id_zapato', (req,res) => {
    res.send('Con qué piezas para el zapato '+req.params.id_zapato);
});

router2.use('/api',router2);
module.exports = router2;