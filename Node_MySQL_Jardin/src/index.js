//Importando framework de express
import express from "express";
import usuariorutas from "../src/rutas/usuarios.rutas.js";
import cors from "cors";

//Objeto para crear el servidor en Node.js
const app = express();

//Permitiendo interpretar archivos json en las solicitudes o peticiones
app.use(express.json());

//Permitiendo el acceso al servidor desde otros dominios
app.use(cors());

//Permitiendo que las rutas creadas en otro archivo, sean leídas y ejecutadas
app.use(usuariorutas);

//Estableciendo puerto para comunicación con el servidor
app.listen("1234");