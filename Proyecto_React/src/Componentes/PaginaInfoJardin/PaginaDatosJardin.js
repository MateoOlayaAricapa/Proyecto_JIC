import React, { useEffect, useState } from "react";
import "../../Estilos/PaginaInfoJardin/paginainfojardin.css";
import {CarruselFotos, InfosecundariaJardin, DescripcionJardin} from "../PaginaInfoJardin/ComponentesAdicionales.js";
import {ReferenciaJardin, ContactosJardin, ServiciosNivelesJardin, DocentesJardin} from "../PaginaInfoJardin/SegundosComponentes.js";

//Importando icono
import IconoIndicador from "../../Multimedia/flecha.png";
import { useNavigate, useParams } from "react-router-dom";

//Componente que tiene la lógica para mostrar información detallada de una jardín infantil
function PaginaInformacionJardin(){

    const navegacion = useNavigate();
    const {codigodni} = useParams();
    const [JardinDatosCompletos, setJardinDatosCompletos] = useState([]);

    //Función que realizará una petición a Node.js para una consulta a la BD
    function consultaAPIJardin(){
        
        fetch(`http://localhost:1234/datoCompletoJardin/${codigodni}`)
        .then(json => json.json())
        .then(resultadojson => setJardinDatosCompletos(resultadojson))
        
    }//Fin función

    useEffect(consultaAPIJardin);

    return(<div className="o-contenedorPrincipalPaginaInfoJardin">
        
        <div className="o-navegacionPagina">
            
            <div className="o-rutaspagina">
                <button onClick={() => navegacion("/PaginaBusquedaJIC")}>Inicio</button>
                <img src={IconoIndicador} alt="Icono que indica la dirección de la navegación"/>
                <h3 id="indicadorJardin">Jardín infantil</h3>
                <img src={IconoIndicador} alt="Icono que indica la dirección de la navegación"/>
                {JardinDatosCompletos.map((valor, i) => <h3 key={i}>{valor.resultado.jardin_infantil.nombre_jardin}</h3>)}
            </div>

        </div>

        <div className="o-informacionJardinInfantil">
            
            <div className="o-contenedorImagenesDatosDescripcionJardin">
                
                {JardinDatosCompletos.map((dato, j) => (
                    <React.Fragment key={j}>
                        <CarruselFotos/>
                        <InfosecundariaJardin direccionJ={dato.resultado.jardin_infantil.direccion} DNIJ={dato.resultado.jardin_infantil.dni} CupoJ={dato.resultado.jardin_infantil.cupo} CiudadJ={dato.resultado.jardin_infantil.ciudad_jardin} DepartamentoJ={dato.resultado.jardin_infantil.departamento_jardin}/>
                        <DescripcionJardin/>
                    </React.Fragment>
                ))}

            </div>

            <div className="o-contenedorTituloServiciosNivelesDocentesJardin">
                
                {JardinDatosCompletos.map((elemento, a) => (

                    <React.Fragment key={a}>

                        <ReferenciaJardin datoNombreJ={elemento.resultado.jardin_infantil.nombre_jardin}/>
                        <ContactosJardin correo={elemento.resultado.jardin_infantil.correo_institucion} telefono1={elemento.resultado.jardin_infantil.telefono_celular1} telefono2={elemento.resultado.jardin_infantil.telefono_celular2}/>
                        <div className="o-lineaseparadoraContactos"/>
                        <ServiciosNivelesJardin NombreComponente={"Servicios"} fondoColor={"#FDE2CA"} colorLetra={"#866446"} arregloservicios={elemento.resultado.servicios}/>
                        <ServiciosNivelesJardin NombreComponente={"Niveles"} fondoColor={"#FCCDCB"} colorLetra={"#7C6362"} arregloservicios={elemento.resultado.niveles}/>
                        <DocentesJardin arreglodocentes={elemento.resultado.integrantes}/>

                    </React.Fragment>

                ))}

            </div>

        </div>

    </div>)

}//Fin componente

export default PaginaInformacionJardin;