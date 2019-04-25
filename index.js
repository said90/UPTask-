const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

//Crear una aplicacion de express
const app = express();

//Carga los archivos estaticos

app.use(express.static('public'));

//Habilitar el template Engine PUG
app.set('view engine', 'pug');

//Agregar la carpeta donde estararn las vistas
app.set('views', path.join(__dirname, './views'));

//Habilitar bodyParser para leer datos de usuario
app.use(bodyParser.urlencoded({extended: true}));

//Puerto en que correra express
app.listen(3000);

app.use('/', routes());


