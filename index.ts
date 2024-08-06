// importamos reflecta data para  que nos permita trabajar con los decoradores
import "reflect-metadata";

// importamos el módulo express para crear y configurar el servidor
import express from "express";

// importamos la configuración de Sequelize desde el archivo db.js para conectar con la base de datos
import sequelize from "./config/db";

// importamos el enrutador de rutas desde el archivo Router.js
import router from "./routes/Router";

//importamos cors para tener el control de 
import cors from "cors"
import { corsOptions } from "./middlewares/cors";

// importamos el errorhandler,
import errorHandler from './middlewares/errorHandler';

// crea una instancia de la aplicación Express
const app = express();

// configura Express para que reciba el body de las solicitudes como JSON
app.use(express.json());
app.use(cors(corsOptions))
// se crea el endpoint por donde se enrutaran las solicitudes
app.use("/e-comfast", router);
app.use(errorHandler)
// creamos una función asíncrona para iniciar el servidor y conectar con la base de datos
const startServer = async () => {
  try {
    
    await sequelize.authenticate();
    console.log("Database connected!");
    await sequelize.sync();
    app.listen(process.env.PORT, () => {
      console.log("Server started");
    });
  } catch (error) {
    // Si hay un error al conectar con la base de datos lo mostrará
    console.error("Unable to connect to the database:", error);
  }
};

// Llama a la función startServer para iniciar el servidor y la conexión con la base de datos
startServer();