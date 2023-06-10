import React, { useState } from "react";
import "../../Estilos/PaginaConfiguración/componenteadicionalsubirjardin.css";
import {InputDatoJardin, InputSelectDatoJardin, CampoTextAreaDatoJardin, InputReactSelectDatoJardin} from "./EntradaDato";
import TablaDatoIntegranteJardin from "./TarjetaIntegrante";

//Importando imagen
import IconoAgregarIntegrante from "../../Multimedia/agregar.png";

//Componente que contiene la lógica para subir la imagen del jardín
export function ComponenteSubirFotoJardin({urlFoto, seturlFoto}){

    const [RutaImagen, setRutaImagen] = useState("");

    return(<div className="o-contenedorCargarFotoJardin">
        
        <div className="o-tituloCargarFoto">
            <h3>Foto del jardín infantil*</h3>
        </div>

        <div className="o-contenedorLogicaCargarFoto">
            
            <div className="o-fotoCargarJardin">
                <img src={urlFoto} alt="Imagen o foto representativa del jardín infantil"/>
            </div>

            <div className="o-entradasURLCargarJardin">
                
                <div className="o-tituloURL">
                    <h2>Sube la URL de la foto de tu jardín infantil</h2>
                </div>

                <div className="o-inputBotonCargarImagen">
                    <input onChange={(e) => setRutaImagen(e.target.value)} type="text" placeholder="Coloca la url aquí..."/>
                    <button onClick={() => seturlFoto(RutaImagen)}>Cargar</button>
                </div>

            </div>

        </div>

    </div>)

}//Fin componente

//Esta componente contendrá todos los inputs para ingresar datos importantes del jardín infantil
export function ComponenteEntradasDatosJardin({setDatosJardin}){
    
    const ArregloCupo = [{value: "Si", label: "Si"}, {value: "No", label: "No"}];

    const ArregloUbicacion = [{value: "Cali,Valle de Cauca", label: "Cali, Valle de Cauca"}, 
    {value: "Medellín,Antioquia", label: "Medellín, Antioquia"}, 
    {value: "Bogotá D.C,Bogotá", label: "Bogotá D.C, Bogotá"}]

    const ArregloComunas = [
        {value: "1", label:"Comuna 1"},
        {value: "2", label:"Comuna 2"},
        {value: "3", label:"Comuna 3"},
        {value: "4", label:"Comuna 4"},
        {value: "5", label:"Comuna 5"},
        {value: "6", label:"Comuna 6"},
        {value: "7", label:"Comuna 7"},
        {value: "8", label:"Comuna 8"},
        {value: "9", label:"Comuna 9"},
        {value: "10", label:"Comuna 10"},
        {value: "11", label:"Comuna 11"},
        {value: "12", label:"Comuna 12"},
        {value: "13", label:"Comuna 13"},
        {value: "14", label:"Comuna 14"},
        {value: "15", label:"Comuna 15"},
        {value: "16", label:"Comuna 16"},
        {value: "17", label:"Comuna 17"},
        {value: "17", label:"Comuna 18"},
        {value: "19", label:"Comuna 19"},
        {value: "20", label:"Comuna 20"},
        {value: "21", label:"Comuna 21"}
    ]

    return(<div className="o-ContenedorDatosJardinEntradas">
        
        <div className="o-contenedorNombreDniCupo">
            <InputDatoJardin nombreCampo={"Nombre completo*"} valorPlaceHolder={"Ingresa el nombre aquí"} largoCampo={"65%"} setDato={setDatosJardin.setnombrej}/>
            <InputDatoJardin nombreCampo={"DNI*"} valorPlaceHolder={"Ingresa DNI"} largoCampo={"15%"} setDato={setDatosJardin.setjardindni}/>
            <InputSelectDatoJardin largoCampoSeleccion={"15%"} arregloValores={ArregloCupo} tamanoCampo={"10em"} NombreCampoS={"Cupo*"} nombrePlaceHolder={"Escoge"} setDatoSelect={setDatosJardin.setcupoj}/>
        </div>

        <div className="o-contenedorTelefonoCorreoDireccion">
            
            <div className="o-correotelefonoubicacion">
                
                <InputDatoJardin nombreCampo={"Primer teléfono o celular*"} valorPlaceHolder={"Ingresa el teléfono..."} largoCampo={"100%"} setDato={setDatosJardin.settelefono1j}/>
                <InputDatoJardin nombreCampo={"Correo electrónico*"} valorPlaceHolder={"Ingresa el correo..."} largoCampo={"100%"} setDato={setDatosJardin.setcorreoj}/>
                <InputSelectDatoJardin largoCampoSeleccion={"100%"} arregloValores={ArregloUbicacion} tamanoCampo={"31em"} NombreCampoS={"Ubicación del jardín infantil*"} nombrePlaceHolder={"Escoge una ubicación aquí..."} setDatoSelect={setDatosJardin.setubicacionj}/>

            </div>

            <div className="o-telefonodireccioncomuna">
                
                <InputDatoJardin nombreCampo={"Segundo teléfono o celular*"} valorPlaceHolder={"Ingresa el teléfono..."} largoCampo={"100%"} setDato={setDatosJardin.settelefono2j}/>
                <InputDatoJardin nombreCampo={"Dirección del jardín*"} valorPlaceHolder={"Ingresa la dirección..."} largoCampo={"100%"} setDato={setDatosJardin.setdireccionj}/>
                <InputSelectDatoJardin largoCampoSeleccion={"100%"} arregloValores={ArregloComunas} tamanoCampo={"31em"} NombreCampoS={"Comuna*"} nombrePlaceHolder={"Escoge una comuna aquí..."} setDatoSelect={setDatosJardin.setcomunaj}/>

            </div>

        </div>

        <div className="o-descripcionJardin">
                
            <CampoTextAreaDatoJardin setDatoDescripcion={setDatosJardin.setdescripcionj}/>

        </div>

    </div>)

}//Fin componente

//Esta componente tiene la lógica para los campos de servicios y niveles que conserva el jardín infantil
export function ComponenteServicioNivelesJardin({setServicios, setNiveles}){

    const ArregloOpcionesServicio = [
        { value: '1', label: 'Natación' },
        { value: '2', label: 'Danzas' },
        { value: '3', label: 'Psicología' },
        { value: '4', label: 'Alimentación' },
        { value: '5', label: 'Refuerzos' },
        { value: '6', label: 'Transporte' },
        { value: '7', label: 'Recreación' },
        { value: '8', label: 'Inglés' },
      ];

    const ArregloOpcionesNiveles = [
        { value: '1', label: 'Salacuna' },
        { value: '2', label: 'Caminantes' },
        { value: '3', label: 'Párvulos' },
        { value: '4', label: 'PreJardín' },
        { value: '5', label: 'Jardín' },
        { value: '6', label: 'Transición' },
      ];

    return(<div className="o-contenedorServicioNivelesDatosJardin">
        
        <InputReactSelectDatoJardin TituloCampoSelect={"Servicios*"} arregloServicioNiveles={ArregloOpcionesServicio} colorFondo={"#FDE2CA"} ColorTexto={"#866446"} setServicioNiveles={setServicios}/>
        <InputReactSelectDatoJardin TituloCampoSelect={"Niveles*"} arregloServicioNiveles={ArregloOpcionesNiveles} colorFondo={"#FCCDCB"} ColorTexto={"#7C6362"} setServicioNiveles={setNiveles}/>

    </div>)

}//Fin componente

//Esta componente contiene la lógica para agregar docentes al jardín correspondiente
export function ComponenteIntegrantesJardin({setdatosIntegrantes}){
    
    const [ArregloIntegrantes, setArregloIntegrantes] = useState([]);
    const [OpenDatosIntegrante, setOpenDatosIntegrante] = useState(false);

    //Estado para los datos del integrante
    const [NombreIntegranteJ, setNombreIntegranteJ] = useState("");
    const [LicenciaturaIntegranteJ, setLicenciaturaIntegranteJ] = useState("");
    const [ExpeIntegranteJ, setExpeIntegranteJ] = useState(0);
    const [FotoIntegranteJ, setFotoIntegranteJ] = useState("https://oji.fundacion-sm.org/wp-content/uploads/2020/03/woman-in-green-and-white-checkered-dress-shirt-wearing-brown-3979152-scaled.jpg");

    //Función que creará una variable con formato de archivo JSON
    function CrearArchivoJson(){

        if(NombreIntegranteJ !== "" && LicenciaturaIntegranteJ !== "" && ExpeIntegranteJ !== 0){

            const Json = {NombreI:NombreIntegranteJ,
                LicenciaturaI: LicenciaturaIntegranteJ,
                ExperienciaI: ExpeIntegranteJ,
                FotoI: FotoIntegranteJ}

            //Esta lógica es para crear una copia de la anterior para después agregarle el nuevo 
            //archivo Json al arreglo.
            //Tema: Spread Operator
            setArregloIntegrantes(prevState => [...prevState, Json]);
            setdatosIntegrantes(prevState => [...prevState, Json]);
            setOpenDatosIntegrante(false);

        }//Fin condición        

    }//Fin función

    return(<div className="o-contenedorIntegrantesJardín">

        <div className="o-contenedorTituloBotonAgregar">
            <h3>Integrantes*</h3>
            <button onClick={() => setOpenDatosIntegrante(true)}>
                <img src={IconoAgregarIntegrante} alt="Icono que representa la acción de agregar integrantes del jardín infantil"/>
            </button>
        </div>

        <div className="o-contenedortarjetasIntegrantes">
            
            <TablaDatoIntegranteJardin arregloDatosCompletos={ArregloIntegrantes}/>

            {OpenDatosIntegrante &&
            <div className="o-ventanaIngresoDatosIntegrante">
                
                <div className="o-contenedorSecundarioDatos">
                    
                    <div className="o-tituloVentanaIntegrante">
                        <h3>Ingresa los datos del integrante</h3>
                    </div>

                    <div className="o-separadorDatoIntegrante"/>

                    <div className="o-entradasInfoIntegrante">
                        
                        <div className="o-campoDatoIntegrante">
                            
                            <h4>Nombre completo</h4>
                            <input type="text" style={{width:"20em"}} onChange={(e) => setNombreIntegranteJ(e.target.value)}/>

                        </div>

                        <div className="o-campoDatoIntegrante">

                            <h4>Licenciatura</h4>
                            <input type="text" style={{width:"12em"}} onChange={(e) => setLicenciaturaIntegranteJ(e.target.value)}/>

                        </div>

                        <div className="o-campoDatoIntegrante">

                            <h4>Experiencia</h4>
                            <input type="text" style={{width:"7em"}} onChange={(e) => setExpeIntegranteJ(e.target.value)}/>

                        </div>

                    </div>

                    <div className="o-botonGuardarCerrarVentanaIntegrante">
                        <button onClick={() => {CrearArchivoJson();}}>Aceptar</button>
                        <button onClick={() => setOpenDatosIntegrante(false)}>Cerrar</button>
                    </div>

                </div>

            </div>}

        </div>

    </div>)

}//Fin componente