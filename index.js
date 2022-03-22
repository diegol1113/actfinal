const express = require('express');
const app = express();
const Port = 8080;
const path = require('path');
const hbs = require('hbs');
//Traemos la librería para la conexión
const mysql = require('mysql2');

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/public', express.static('public'))


const conexion =  mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "GarabatO3331",
    database: "metahapaxcontacto",
});

conexion.connect((error) =>{
    if(error) throw error;
    console.log('Conexión a la Data Base exitosa!!');
});



//Configuramos el Motor de Plantillas
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.get('/', (req, res) =>{
    res.render('index')
});





app.get('/contactanos', (req, res) =>{
    res.render('contactanos')
});

app.post('/formulario', (req, res) =>{

    //Desestructuración de las variables
    const { nombre, precio, descripcion } = req.body;
        
    if(nombre == "" || precio == ""){
        
        let validacion = 'Faltan datos para guardar el Producto';
        
        res.render('formulario', {
            titulo: 'Formulario para Completar',
            validacion
        });

    }else{

        console.log(nombre);
        console.log(precio);
        console.log(descripcion);

        //Insertar datos a la DB
        let data = {
            producto_nombre: nombre, 
            producto_precio: precio,
            producto_descripcion: descripcion
        }

        let sql = 'Insert into productos set ?';

        conexion.query(sql, data, (error, results) =>{
            if(error) throw error;
            res.render('/', {
            
            }); 
        })
    }
});

















app.get('/merch', (req, res) =>{
    res.render('merch')
});


//conexion.end();



app.listen(Port, () => {
    console.log('el servidor es ' + Port);
});
app.on('error', (err) =>{
    console.log(`Error en la ejecución del Servidor ${error}`);
});
