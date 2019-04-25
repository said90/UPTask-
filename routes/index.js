const express = require('express');
const router = express.Router();

//Inporta el controller
const proyectosController = require('../controllers/proyectosController');


module.exports = function () {
    //Definiendo rutas

    //Home
    router.get('/', proyectosController.proyectosHome);
    router.get('/nuevo-proyecto', proyectosController.formularioProyecto);
    router.post('/nuevo-proyecto', proyectosController.nuevoProyecto);


    return router;
}


