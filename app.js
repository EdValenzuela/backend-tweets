/*
    Notas :
    @ (Versionamiento de compatibilidad)
    -S o --save (save) dependencia persistente
    npm unistall [nonmbre del modulo]

    1.- body-parser@1.19.0 -S
    Sirve para el formato de respuesta rest json de las estructuras
    
    2.- braintree@2.16.0 -S
    Se usa para la estructura de pago segura gateway

    3.- cookie-parser@1.4.4 -S
    Guardar informacion cookies
    
    4.- cors@2.8.5 -S
    Permite la comunicación con el front y queda accesible permitiendo 
    que no aparezca problemas de politicas de cors

    5.- dotenv@8.0.0 -S
    Para apuntar a las propiedades de variables de entorno

    6.- express@4.16.4 -S
    Agilizar proceso rest server y peticiones

    7.- express-jwt@5.3.1 -S
    Manejar asociación de json web token

    8.- express-validator@5.3.1 -S
    validaciones 

    9.- formidable@1.2.1 -S
    configuraciones de archivos

    10.- jsonwebtoken@8.5.1 -S
    seguridad de token

    11.- lodash@4.17.11 -S
    middleware kit de js

    12.- moment@2.24.0 -S
    configuracion de fechas

    13.- mongoose@5.5.5 -S
    para utilizacion de bd no relacional

    14.- morgan@1.9.1 -S
    respuesta correctas y errores en consola log

    15.- nodemon@1.19.0 -S
    cambios reflejados constantemente

    16.- uuid@3.3.2 -S
    genera un id random y unico

*/

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const expressValidator = require("express-validator");
require("dotenv").config();

// import routes

// const authRoutes = require("./routes/auth");
// const fileRoutes = require("./routes/file");
// const relationRoutes = require("./router/relation");
// const tweetsRoutes = require("./routes/tweets");
// const usersRoutes = require("./routes/users");

// app - express
const app = express();

// db new whit async - await
const db = async()=>{
    try {
        //mongodb://localhost:27017/nodebdd
        const successConnect = await mongoose.connect(process.env.DATABASE,{
            useNewUrlParser:true, //confirma la nueva conexion
            useUnifiedTopology:true, 
            useCreateIndex:true, //crea instancia de conexion bdd
            useFindAndModify:false //utilizar metodos nativos de mongo
        });
        console.log('DB connected entre al try');
    } catch (error) {
        console.log(`Entre al Catch Is not connected for error ${error}`);
    }
}

db();

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());

// habilitar routing
// routes middlewares
// app.use("/api", authRoutes);
// app.use("/api", fileRoutes);
// app.use("/api", relationRoutes);
// app.use("/api", tweetsRoutes);
// app.use("/api", usersRoutes);

//port
const port = process.env.PORT || 8000;

//listen port
app.listen(port, () =>{
    console.log(`Server running on port => ${port}`);
});

