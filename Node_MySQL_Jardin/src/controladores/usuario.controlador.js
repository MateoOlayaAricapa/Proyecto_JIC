import { connection } from "../db.js";

//Esta función realizará una consulta para traer un dato de un usuario
export async function getUsuario(req, res){

    var sentenciaGet = 'SELECT id_usuario, nombre, apellido, correo, contraseña, departamento, ciudad, foto_usuario FROM usuario WHERE correo = ? AND contraseña = ?';
    const correoU = req.params.correo;
    const contraseñaU = req.params.password;

    const [rows] = await connection.query(sentenciaGet, [correoU, contraseñaU]);

    if (rows.length == 0) return res.status(404).json({mensaje: "No encontrado"});

    res.json(rows[0]);

}//Fin función

//Esta función logrará almacenar un dato en la BD
export async function postUsuario(req, res){

    var sentenciaSQL = 'INSERT INTO usuario (nombre, apellido, correo, contraseña, departamento, ciudad, foto_usuario) VALUES(?,?,?,?,?,?,?)';
    var valores = [req.body.nombre, req.body.apellido, req.body.correo, req.body.contraseña, req.body.departamento, req.body.ciudad, req.body.foto];

    try{

        const [resultados] = await connection.query(sentenciaSQL, valores);
        res.send({resultados});

    }catch(error){

        res.status(500).json({mensaje: 'Error al guardar los datos'});

    }//Fin catch

}//Fin función

//Esta función realizará una consulta para traer todos los datos de los jardines
export async function getDatosJardines(req, res){

    var sentenciaSQL = 'SELECT JI.dni, JI.nombre_jardin, JI.direccion FROM jardin_infantil as JI';
    const [row] = await connection.query(sentenciaSQL);

    res.json(row);

}//Fin función

//Función que realizará una consulta para traer los jardines según la comuna
export async function getDatosJardinesComunas(req, res){

    var getComunaSQL = 'SELECT * FROM jardin_infantil WHERE comuna = ?';
    var valorComuna = req.params.comuna
    const [rows] = await connection.query(getComunaSQL, [valorComuna])

    if(rows.length == 0) return res.status(404).json({mensaje: "No encontrado comunas"});

    res.json(rows);

}//Fin función

//Función que realizará una consulta para traer un jardín según el nombre
export async function getJardinNombre(req, res){

    var getNombreJardinSQL = 'SELECT * FROM jardin_infantil WHERE nombre_jardin = ?'
    var nombreJardinInfantil = req.params.nombreJ;
    //var dniJardin = req.params.dni;
    const [results] = await connection.query(getNombreJardinSQL, [nombreJardinInfantil]);

    if(results.length == 0) return res.status(404).json({mensaje: "jardín no encontrado"});

    res.json(results);

}//Fin función

//Función que realizará una actualización de los datos del usuario
export async function ActualizarDatos(req, res){

    var setDatosUsuarioSQL = 'UPDATE usuario SET nombre = ?, apellido = ?, contraseña = ?, foto_usuario = ? WHERE id_usuario = ?';
    var Datos = [req.body.nombreUsuarioN, req.body.apellidoUsuarioN, req.body.passwordUsuario, req.body.url, req.body.id];
    const [resultados] = await connection.query(setDatosUsuarioSQL, Datos);

    if(resultados.length == 0) return res.status(404).json({mensaje: "datos no actualizados"});

    res.json(resultados);

}//Fin función

//En este apartado se realizará una serie de consultas para traer datos importantes de un jardín infantil
export async function getDatosCompletosJardin(req, res){

    var DatosCompletosSQL = 'SELECT JSON_OBJECT(' +
    '\'jardin_infantil\', (SELECT JSON_OBJECT(\'dni\', JI.dni, \'nombre_jardin\', JI.nombre_jardin, \'direccion\', JI.direccion, \'departamento_jardin\', JI.departamento_jardin, \'ciudad_jardin\', JI.ciudad_jardin, \'descripcion\', JI.descripcion, \'cupo\', JI.cupo, \'correo_institucion\', JI.correo_institucion, \'telefono_celular1\', JI.telefono_celular1, \'telefono_celular2\', JI.telefono_celular2, \'comuna\', JI.comuna) FROM jardin_infantil AS JI WHERE JI.dni = ?), ' +
    '\'servicios\', (SELECT JSON_ARRAYAGG(JSON_OBJECT(\'id_servicio\', S.id_servicio, \'nombre_servicio\', S.nombre_servicio, \'dni\', SJ.dni)) FROM servicio_jardin AS SJ INNER JOIN servicio AS S ON SJ.id_servicio = S.id_servicio WHERE SJ.dni = ?), ' +
    '\'niveles\', (SELECT JSON_ARRAYAGG(JSON_OBJECT(\'nombre_nivel\', N.nombre_nivel, \'id_nivel\', N.id_nivel, \'dni\', NJ.dni)) FROM nivel_jardin AS NJ INNER JOIN nivel AS N ON NJ.id_nivel = N.id_nivel WHERE NJ.dni = ?), ' +
    '\'integrantes\', (SELECT JSON_ARRAYAGG(JSON_OBJECT(\'rol\', JI.rol, \'dni\', JI.dni, \'nombre_integrante\', I.nombre_integrante, \'apellido_integrante\', I.apellido_integrante, \'experiencia\', I.experiencia, \'licenciatura\', I.licenciatura, \'foto_integrante\', I.foto_integrante)) FROM jardin_integrante AS JI INNER JOIN integrante AS I ON JI.id_integrante = I.id_integrante WHERE JI.dni = ?) ' +
    ') AS resultado;';  
    
    var dni = req.params.dni;
    const [resultados] = await connection.query(DatosCompletosSQL, [dni, dni, dni, dni]);

    if(resultados[0].resultado.niveles === null && resultados[0].resultado.servicios === null && resultados[0].resultado.integrantes === null && resultados[0].resultado.jardin_infantil === null) return res.status(404).json({mensaje: "Datos Jardín no encontrado"});

    res.json(resultados);

}//Fin función

//Función que realizará un post al servidor para guardar datos al gestor de base de datos
export async function postGuardarDatosJardin(req, res){

    var sentenciaSQLguardarJardin = 'INSERT INTO jardin_infantil VALUES(?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?);';
    var datos = [req.body.dniJardin, req.body.nombre_jardin, 
                req.body.direccion_jardin, req.body.departamento_jardin, 
                req.body.ciudad_jardin, req.body.descripcion, 
                req.body.cupo_jardin, req.body.correo_jardin, req.body.telefono1, 
                req.body.telefono2, req.body.id_usuario, req.body.comuna_jardin];

    try{

        const [resultadoInicial] = await connection.query(sentenciaSQLguardarJardin, datos);

        var sentenciaSQLguardaFotoJardin = 'INSERT INTO imagen (foto_jardin, dni) VALUES(?,?)';

        var datoImagen = [req.body.fotoJardin, req.body.dniJardin];

        const [resultadoSecundario] = await connection.query(sentenciaSQLguardaFotoJardin, datoImagen);

        res.send({resultadoInicial, resultadoSecundario});

    }catch(error){

        res.status(500).send('Error al guardar los datos');

    }//lógica para recuperar un error si no se guardan los datos

}//Fin función

//Función que guardará los datos asociados a servicios y niveles de un jardín
export async function postGuardarDatosNivelesServicios(req, res){

    var datosServicios = req.body.ListaServicios;
    var datosNiveles = req.body.ListaNiveles;
    var identificadorJardin = req.body.dni;

    //Ciclo for para recorrer cada array de datos
    for (let i = 0; i < datosServicios.length; i++) {
        
        var sentenciaGuardar = 'INSERT INTO servicio_jardin (id_servicio, dni) VALUES(?,?)';

        var datoServicio = [datosServicios[i].value, identificadorJardin];

        try{

            const [resultadosConsultas] = await connection.query(sentenciaGuardar, datoServicio);

        }catch(error){

            console.error('Error al insertar datos:', error);
            res.status(500).send('Error al guardar los datos');

        }//captura de error si surge en el guardado      
        
    }//Fin ciclo

    for (let j = 0; j < datosNiveles.length; j++) {
       
        var sentenciaGuardarNiveles = 'INSERT INTO nivel_jardin (id_nivel, dni) VALUES(?,?)';

        var datoNiveles = [datosNiveles[j].value, identificadorJardin];
        
        try{

            const [resultadosConsultas2] = await connection.query(sentenciaGuardarNiveles, datoNiveles);

        }catch(error){

            console.error('Error al insertar datos:', error);
            res.status(500).send('Error al guardar los datos');

        }//captura de error si surge en el guardado      

    }//Fin ciclo for

}//Fin función

//Función que guardará los datos de los integrantes
export async function postGuardarDatosIntegrantesJardin(req, res){

    var datosIntegrantes = req.body.listaIntegrantes;

    var codigoJardin = req.body.idJardin;
    var rolIntegrante = "Profesora"

    for (let l = 0; l < datosIntegrantes.length; l++) {
        
        var sentenciaIntegrantes = 'INSERT INTO integrante (nombre_integrante, apellido_integrante, experiencia, licenciatura, foto_integrante) VALUES(?, ?, ?, ?, ?)';

        var [nombre, apellido] = datosIntegrantes[l].NombreI.split(" ");

        var datosI = [nombre, apellido, datosIntegrantes[l].ExperienciaI, datosIntegrantes[l].LicenciaturaI, datosIntegrantes[l].FotoI]
        
        var sentenciaIntermedia = 'INSERT INTO jardin_integrante (rol, dni, id_integrante) VALUES(?,?,?)'

        try{

            const [resultadosInsercion] = await connection.query(sentenciaIntegrantes, datosI);

            var datosIntermedios = [rolIntegrante, codigoJardin, resultadosInsercion.insertId];

            const [resultadosIntermedia] = await connection.query(sentenciaIntermedia, datosIntermedios);

            //console.log(resultadosInsercion);

        }catch(error){

            console.error('Error al insertar datos:', error);
            res.status(500).send('Error al guardar los datos');

        }//captura de error si surge en el guardado  

    }//Fin ciclo flor

}//Fin función