import React, {useContext, useEffect, useState} from "react";
import "../../Estilos/PaginaBusqueda/paginabusqueda.css";
import SeccionNavBar from "../NavBar/NavBar";
import SeccionFiltroBotones from "./SeccionFiltros";
import SeccionTarjetaJardin from "./TarjetaJardin";
import { DataContexto } from "../../ContextAPI/contextAPI";
import SeccionResultadosNoEncontrados from "../VentanaError/ResultadosNoEncontrados";

//Componente que abarca la información para buscar todos los jardines
function PaginaBusquedaJardines(){

    const {archivoUsuarioJson} = useContext(DataContexto);
    const [jardinesJson, setJardinesJson] = useState([]);
    const [openError, setopenError] = useState(false);
    const [openTarjetas, setopenTarjetas] = useState(true)

    //Este Hook realizará una petición al servidor para consultar los datos de jardines infantiles
    useEffect(() => {

        fetch("http://localhost:1234/datosJardinesInfantiles")
        .then(respuesta => respuesta.json())
        .then(resultado => setJardinesJson(resultado));

    }, []);

    return(<div className="o-contenedorPaginaBusqueda">
        
        <SeccionNavBar valor={archivoUsuarioJson} setQuery={setJardinesJson} setResultsNot={setopenError} setOpenTarjetasJardin={setopenTarjetas}/>
        
        <div className="o-tituloJardinesJIC">
            <h1>JARDINES INFANTILES</h1>
        </div>

        <SeccionFiltroBotones setJardines={setJardinesJson} setError={setopenError} setTarjetas={setopenTarjetas}/>

        <div className="o-contenedorTarjetasJardines">

            {openError && <SeccionResultadosNoEncontrados/>}

            {openTarjetas && jardinesJson.map((datos, i) => <SeccionTarjetaJardin key={i} nombreJardin={datos.nombre_jardin} direccion={datos.direccion} dniJardin={datos.dni}/>)}

        </div>

    </div>)

}//Fin componente

export default PaginaBusquedaJardines;