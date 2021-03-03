const {Router} = require('express');
const router2 = Router();

router2.get('/agujetas', (req,res) => {
    res.send('Cuántas agujetas');
});

router2.get('/agujetas/:color', (req,res) => {
    res.send('Cuántas agujetas de color '+req.params.color);
});

router2.get('/suelas', (req,res) => {
    res.send('Cuántas suelas');
});

router2.get('/suelas/:color', (req,res) => {
    res.send('Cuántas suelas de color '+req.params.color);
});

router2.get('/telas', (req,res) => {
    res.send('Cuántas telas');
});

router2.get('/telas/:color', (req,res) => {
    res.send('Cuántas telas de color '+req.params.color);
});

router2.get('/zapatos', (req,res) => {
    res.send('Cuántos zapatos que ensamblar');
});

router2.get('/zapatos/:id_zapato', (req,res) => {
    res.send('Con qué piezas para el zapato '+req.params.id_zapato);
});

router2.use('/api',router2);
module.exports = router2;