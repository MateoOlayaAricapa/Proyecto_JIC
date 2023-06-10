//Importando Router para establecer las rutas de comunicación con el servidor
import { Router } from "express";
import { getUsuario, postUsuario, getDatosJardines, getDatosJardinesComunas, getJardinNombre, ActualizarDatos, getDatosCompletosJardin, postGuardarDatosJardin, postGuardarDatosNivelesServicios, postGuardarDatosIntegrantesJardin } from "../controladores/usuario.controlador.js";

//Creando un objeto de Router
const router = Router();

//Estableciendo rutas get, post, delete, update

//Esta ruta permitirá traer el dato de un usuario al sitio web
router.get("/usuariosesion/:correo/:password", getUsuario);

//Esta ruta realizará un envío de un dato para almacenarse en la BD
router.post("/guardarusuario", postUsuario);

//Esta ruta traera todos los datos relacionados a los jardines almacenados en la BD
router.get("/datosJardinesInfantiles", getDatosJardines);

//Esta ruta permitirá traer los datos de jardínes según la comuna escogida
router.get("/datosJardinesComuna/:comuna", getDatosJardinesComunas);

//Ruta que permitirá traer los datos de un jardín a partir de su nombre
router.get("/datoNombreJardin/:nombreJ/", getJardinNombre);

//Ruta que permitirá actualizar los datos importantes del usuario
router.put("/ActualizarDatosUsuario/", ActualizarDatos);

//Conjunto de rutas que permitirá traer una serie de datos de un jardín
router.get("/datoCompletoJardin/:dni", getDatosCompletosJardin); 

//********************************************************************************************//
//Ruta que permitirá guardar los datos de un jardín infantil
router.post("/guardarDatosJardin", postGuardarDatosJardin);

//Ruta que permitirá guardar los datos de servicios y niveles
router.post("/guardarDatosServiciosNivelesJardin", postGuardarDatosNivelesServicios);

//Ruta que guardará datos de los integrantes
router.post("/guardarDatosIntegrantes", postGuardarDatosIntegrantesJardin);

export default router;
