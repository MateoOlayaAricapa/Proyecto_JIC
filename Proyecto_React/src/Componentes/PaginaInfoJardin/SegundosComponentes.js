import React from "react";
import "../../Estilos/PaginaInfoJardin/segundoscomponentes.css";

//Importando imágenes
import IconoCorreo from "../../Multimedia/Correo.png";
import IconoTelefono from "../../Multimedia/telefono.png";
//import ImagenMujer from "../../Multimedia/PruebaMujer.jpg";

//Esta componente secundaría tendrá una serie de componentes pequeñas
export function ReferenciaJardin({datoNombreJ}){

    return(<div className="o-tituloPrincipalJardin">
        <h1>{datoNombreJ}</h1>
    </div>)

}//Fin componente

export function ContactosJardin({correo, telefono1, telefono2}){

    return(<div className="o-contenedorContactosJardin">
        
        <div className="o-correoJardin">
            <img src={IconoCorreo} alt="Icono que señala el correo del jardín infantil"/>
            <h3>{correo}</h3>
        </div>

        <div className="o-primerTelefono">
            <img src={IconoTelefono} alt="Icono que señala el primer teléfono disponible del jardín infantil"/>
            <h3>{telefono1}</h3>
        </div>

        <div className="o-segundoTelefono">
            <img src={IconoTelefono} alt="Icono que señala el segundo teléfono disponible del jardín infantil"/>
            <h3>{telefono2}</h3>
        </div>

    </div>)

}//Fin componente

export function ServiciosNivelesJardin({NombreComponente, fondoColor, colorLetra, arregloservicios}){

    const serviciosNiveles = arregloservicios;

    return(<div className="o-contenedorServiciosJardin">
        
        <div className="o-tituloServicios">
            <h2>{NombreComponente}</h2>
        </div>

        <div className="o-servicios">

            {NombreComponente === "Servicios" ? serviciosNiveles.map((valor, i) => <div key={i} className="o-nombreServicio" style={{background: fondoColor}}>
                <h3 style={{color: colorLetra}}>{valor.nombre_servicio}</h3>
            </div>) : serviciosNiveles.map((valor, i) => <div key={i} className="o-nombreServicio" style={{background: fondoColor}}>
                <h3 style={{color: colorLetra}}>{valor.nombre_nivel}</h3>
            </div>)}

        </div>

    </div>)

}//Fin componente


export function DocentesJardin({arreglodocentes}){

    const DatosDocentes = arreglodocentes;

    return(<div className="o-contenedorDatosDocenteJardin">
        
        <div className="o-tituloDocentes">
            <h1>Docentes</h1>
        </div>

        <div className="o-datosDocentes">
            
            {DatosDocentes.map((valor, i) => <div key={i} className="o-docente">
                <div className="o-imagenDocente">
                    <img src={valor.foto_integrante} alt="Perfil de la docente"/>
                </div>
                <div className="o-textoDocente">
                    <h3>{valor.nombre_integrante + " " + valor.apellido_integrante}</h3>
                    <h3>Licenciada: {valor.licenciatura}</h3>
                    <h3>Experiencia: {valor.experiencia} año(s)</h3>
                </div>
            </div>)}

        </div>

    </div>)

}//Fin componente

