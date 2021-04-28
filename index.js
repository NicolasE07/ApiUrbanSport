const express = require('express'); //usamos express en nuestro proyecto
const bodyParser = require('body-parser');//usamos libreria bodyparser

const { conectToDB } = require('./db'); //llamamos al archivo de db.js para poder conectar con la base de datos


const app = express(); // lo convertimos en objeto para poder usar todas sus herramientas

app.use(bodyParser.json());
//usamos la funcion de body para poder insertar los datos en postman sin error
conectToDB();

require('./Routes/product')(app);
require('./Routes/category')(app);// se esta cargando el archivo de rutas de las categorias y se envia una variable llamada app

app.listen(3000, () => {
    console.log('conectado correctamente')
});


