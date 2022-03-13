const express = require('express');
const app = express();
const Port = 8080;
const path = require('path');
const hbs = require('hbs');
//Traemos la librería para la conexión
const mysql = require('mysql2');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use(express.static(path.join(__dirname, 'public')));


//Configuramos el Motor de Plantillas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, '../z-actividadfinal/views/partials'));
app.use(express.static('./public'));

app.get('/', (req, res) =>{
    res.render('index')
});


app.listen(Port, () => {
    console.log('el servidor es ' + Port);
});
app.on('error', (err) =>{
    console.log(`Error en la ejecución del Servidor ${error}`);
})