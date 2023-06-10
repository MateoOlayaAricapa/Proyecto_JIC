import React, { useState } from "react";
import "../../Estilos/PaginaConfiguración/seccionsubirjardin.css";
import { ComponenteSubirFotoJardin, ComponenteEntradasDatosJardin, ComponenteServicioNivelesJardin, ComponenteIntegrantesJardin } from "./ComponentesAdicionalSubirJardin";

//Cargando imagen por defecto
import InsertarImagenJardin from "../../Multimedia/InsertarImagen.png";
import IconoCorrecto from "../../Multimedia/correcto.png";

//Componente que conserva la lógica para subir datos de un jardín en la base de datos
function SeccionGuardarDatosJardin({identificadorUsuario}){
    
    const [abrirMensajeGuardado, setabrirMensajeGuardado] = useState(false);

    //Estados para tomar los datos a ingresar en la base de datos
    const [URLFotoJardin, setURLFotoJardin] = useState(InsertarImagenJardin);
    const [nombrej, setnombrej] = useState("");
    const [jardindni, setjardindni] = useState(0);
    const [direccionj, setdireccionj] = useState("");
    const [ubicacionj, setubicacionj] = useState("");
    const [descripcionj, setdescripcionj] = useState(null);
    const [cupoj, setcupoj] = useState("");
    const [correoj, setcorreoj] = useState("");
    const [telefono1j, settelefono1j] = useState("");
    const [telefono2j, settelefono2j] = useState("");
    const [comunaj, setcomunaj] = useState(0);

    const funcionesSetDatosJardin = {setnombrej: setnombrej, 
                                    setjardindni:setjardindni,
                                    setdireccionj: setdireccionj,
                                    setubicacionj: setubicacionj,
                                    setdescripcionj: setdescripcionj,
                                    setcupoj: setcupoj,
                                    setcorreoj: setcorreoj,
                                    settelefono1j: settelefono1j,
                                    settelefono2j: settelefono2j,
                                    setcomunaj: setcomunaj}

    //Estados para los datos de servicio y niveles
    const [arregloServicios, setarregloServicios] = useState([]);
    const [arregloNiveles, setarregloNiveles] = useState([]);

    //Estado para los datos del integrante o integrantes
    const [listaIntegranteJardin, setlistaIntegranteJardin] = useState([]);

    //Función que realizará las peticiones a Node.js para comunicarse con la BD
    function solicitudNodeBD(){

        const variablesDatosJardin = [{valor: URLFotoJardin}, {valor: nombrej},
                                    {valor: jardindni}, {valor: direccionj},
                                    {valor: ubicacionj}, {valor: descripcionj},
                                    {valor: cupoj}, {valor: correoj},
                                    {valor: telefono1j}, {valor: telefono2j},
                                    {valor: comunaj}];

        let envioDatosBD = true;

        //Condición que verifica que las campos de entradas de datos tenga valores ingresados
        for (let i = 0; i < variablesDatosJardin.length; i++) {

            switch (variablesDatosJardin[i].valor){

                case "":

                    envioDatosBD = false;
                    i = variablesDatosJardin.length;
                    break;

                case 0:

                    envioDatosBD = false;
                    i = variablesDatosJardin.length;
                    break;
                
                default:

                    envioDatosBD = true;

            }//Fin condición
            
        }//Fin ciclo


        //Condición que asegura que los arreglos de datos no estén vacíos
        if(arregloNiveles.length === 0 || arregloServicios.length === 0 || listaIntegranteJardin.length === 0){

            envioDatosBD = false;

        }//Fin condición

        if(envioDatosBD === true){

            setabrirMensajeGuardado(true);
            const [ciudad, departamento] = ubicacionj.split(",");

            const requestOptions = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ nombre_jardin: nombrej, dniJardin: jardindni,
                                    direccion_jardin: direccionj, ciudad_jardin: ciudad,
                                    departamento_jardin: departamento, descripcion: descripcionj,
                                    cupo_jardin: cupoj, correo_jardin: correoj, telefono1: telefono1j,
                                    telefono2: telefono2j, comuna_jardin: comunaj, id_usuario:identificadorUsuario,
                                    fotoJardin: URLFotoJardin})
            };

            //Fetch para guardar datos iniciales del jardín infantil
            fetch('http://localhost:1234/guardarDatosJardin', requestOptions)
            .then(respuesta => respuesta.json())
            .then(data => console.log(data));  


            const requestOptions2 = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ListaServicios: arregloServicios, ListaNiveles: arregloNiveles, dni: jardindni})
            };

            //Fetch para guardar datos de los servicios y niveles que ofrece el jardín infantil
            fetch('http://localhost:1234/guardarDatosServiciosNivelesJardin', requestOptions2)
            .then(respuesta2 => respuesta2.json())
            .then(data2 => console.log(data2));

            const requestOptions3 = {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({listaIntegrantes: listaIntegranteJardin, idJardin: jardindni})
            };

            //Fetch que guarda todos los datos de los integrantes del jardín infantil
            fetch('http://localhost:1234/guardarDatosIntegrantes', requestOptions3)
            .then(respuesta3 => respuesta3.json())
            .then(data3 => console.log(data3));
            

        }else if(envioDatosBD === false){

            alert("Existen campos de datos vacíos sin datos. Ingrese la información correspondiente, por favor.")

        }//Fin condición
        

    }//Fin función

    return(<div className="o-contenedorPrincipalSubirJardin">
        
        <ComponenteSubirFotoJardin urlFoto={URLFotoJardin} seturlFoto={setURLFotoJardin}/>
        <ComponenteEntradasDatosJardin setDatosJardin={funcionesSetDatosJardin}/>
        <ComponenteServicioNivelesJardin setNiveles={setarregloNiveles} setServicios={setarregloServicios}/>
        <ComponenteIntegrantesJardin setdatosIntegrantes={setlistaIntegranteJardin}/>

        <div className="o-contenedorBotonSubirDatosJardin">

            <div className="o-botonguardarinformacionjardin">
                <button onClick={() => solicitudNodeBD()}>Guardar información</button>
            </div>

            {abrirMensajeGuardado &&
            <div className="o-mensajeGuardadoDatos">
                <img src={IconoCorrecto} alt="Icono que indica que todo se guardó correctamente"/>
                <h3>Información guardada con éxito</h3>
            </div>}
            
        </div>

    </div>)

}//Fin componente

export default SeccionGuardarDatosJardin;