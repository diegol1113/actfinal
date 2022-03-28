require('dotenv').config();
const express = require('express');
const app = express();
//const Port = 8080;
const path = require('path');
const hbs = require('hbs');
const mysql = require('mysql2');
const PORT = process.env.PORT;

app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/public', express.static('public'))


/*const conexion =  mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "GarabatO3331",
    database: "metahapaxcontacto",
});

conexion.connect((error) =>{
    if(error) throw error;
    console.log('Data Base Conectada.');
}); */


app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));
hbs.registerPartials(path.join(__dirname, '/views/partials'));

app.get('/', (req, res) =>{
    res.render('index')
});





app.get('/contactanos', (req, res) =>{
    res.render('contactanos')
});

app.post('/contactanos', (req, res) =>{

    //Desestructuración de las variables
    const { fechaDeContacto, nombre, apellido, tipoDeContacto, institucion, telefono, mailDeContacto } = req.body;
    if(nombre == "" || apellido == "" || tipoDeContacto == "" || telefono == "" || mailDeContacto == ""){
        
        let validacion = 'Formulario incompleto';
        
        res.render('contactanos', {validacion});
}else{

        console.log(fechaDeContacto);
        console.log(nombre);
        console.log(apellido);
        console.log(tipoDeContacto);
        console.log(institucion);
        console.log(telefono);
        console.log(mailDeContacto);
        
        let data = {
            fechaDeContacto: fechaDeContacto,
            nombre: nombre, 
            apellido: apellido,
            tipoDeContacto: tipoDeContacto,
            institucion: institucion,
            telefono: telefono,
            mailDeContacto: mailDeContacto
        }
        let sql = 'Insert into contacto set ?';

        conexion.query(sql, data, (error, results) => {
            if(error) throw error;
            res.render('index')
        });

    }
});

app.get('/prensa', (req, res) =>{
    res.render('prensa')
});
app.listen(PORT, () => {
    console.log('el servidor es ' + PORT);
});
app.on('error', (err) =>{
    console.log(`Error en la ejecución del Servidor ${error}`);
});
