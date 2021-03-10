const {Router} = require('express');
const router2 = Router();

const zapatos = require('./datos.json');
console.log(zapatos);

//Precondición: Ninguna (solo se accede en la ruta)
//Postcondición: Regresa la cantidad de agujetas que se necesitan para hacer los zapatos
router2.get('/agujetas', (req,res) => {
    var cont_agujetas = 0;
    zapatos.forEach(zapato => {
        cont_agujetas++;
    });
    res.send(""+cont_agujetas);
});

//Precondición: Ingresar un color de agujetas válido
//Postcondición: Regresa la cantidad de agujetas de un color particular que se necesitan para hacer los zapatos
router2.get('/agujetas/:color', (req,res) => {
    const {color} = req.params;
    var cont_agujetas = 0;
    zapatos.forEach(zapato => {
        if(zapato.c_agujetas == color){
            cont_agujetas++;
        }
    });
    res.send(""+cont_agujetas);
});

//Precondición: Ninguna (solo se accede en la ruta)
//Postcondición: Regresa la cantidad de suelas que se necesitan para hacer los zapatos
router2.get('/suelas', (req,res) => {
    var cont_suelas = 0;
    zapatos.forEach(zapato => {
        cont_suelas++;
    });
    cont_suelas = cont_suelas*2;
    res.send(""+cont_suelas);
});

//Precondición: Ingresar un color de suela válido
//Postcondición: Regresa la cantidad de suelas de un color particular que se necesitan para hacer los zapatos
router2.get('/suelas/:color', (req,res) => {
    const {color} = req.params;
    var cont_suelas = 0;
    zapatos.forEach(zapato => {
        if(zapato.c_suelas == color){
            cont_suelas++;
        }
    });
    cont_suelas = cont_suelas*2;
    res.send(""+cont_suelas);
});

//Precondición: Ninguna (solo se accede en la ruta)
//Postcondición: Regresa la cantidad de telas que se necesitan para hacer los zapatos
router2.get('/telas', (req,res) => {
    var cont_telas = 0;
    zapatos.forEach(zapato => {
        cont_telas++;
    });
    cont_telas = cont_telas*2;
    res.send(""+cont_telas);
});

//Precondición: Ingresar un color de tela válido
//Postcondición: Regresa la cantidad de telas de un color particular que se necesitan para hacer los zapatos
router2.get('/telas/:color', (req,res) => {
    const {color} = req.params;
    var cont_telas = 0;
    zapatos.forEach(zapato => {
        if(zapato.c_tela == color){
            cont_telas++;
        }
    });
    res.send(""+cont_telas);
});

//Precondición: Ninguna (solo se accede en la ruta)
//Postcondición: Regresa la cantidad de zapatos que faltan por fabricar
router2.get('/zapatos', (req,res) => {
    res.send(''+zapatos.length);
});

//Precondición: Ingresar un identificador de zapato válido
//Postcondición: Regresa la cantidad y los tipos de piezas que se necesitan para fabricar uno de los zapatos
router2.get('/zapatos/:id_zapato', (req,res) => {
    const {id_zapato} = req.params;
    zapatos.forEach(zapato => {
        if(zapato.id_zapato == id_zapato){
            res.send(zapato);
        }
    });
});

module.exports = router2;