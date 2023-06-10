import React, {useState, useContext} from "react";
import "../../Estilos/PaginaConfiguración/paginaconfiguracion.css";
import { useNavigate } from "react-router-dom";
import { DataContexto } from "../../ContextAPI/contextAPI";
import SeccionEditarPerfilUsuario from "./SeccionEditarPerfil";
import SeccionGuardarDatosJardin from "./SeccionSubirJardin";


//Importando icono de cerrar
import IconoCerrar from "../../Multimedia/cerrar.png";
import LogoPlataforma from "../../Multimedia/Logo_exportar.png";

//Componente que conserva la lógica de configuración de perfil
function PaginaConfiguracionPerfil(){

    const navegate = useNavigate();
    const [styleBoton1, setstyleBoton1] = useState(0);
    const {archivoUsuarioJson} = useContext(DataContexto);

    const [OpenEditarPerfil, setOpenEditarPerfil] = useState(true);
    const [OpenGuardarDatosJardin, setOpenGuardarDatosJardin] = useState(false);

    return(<div className="o-contenedorPaginaPrincipal">

        <div className="o-encabezadoConfiguración">
            
            <div className="o-logoEncabezado">
                <img src={LogoPlataforma} alt="Logo de la plataforma JIC"/>
            </div>

            <div className="o-fotoPerfilUsuario">
                <img src={archivoUsuarioJson.foto_usuario} alt="logo usuario de la plataforma"/>
            </div>

        </div>

        <div className="o-tituloConfiguracion">

            <h1>Configuración</h1>
            <button onClick={() => navegate("/PaginaBusquedaJIC")}>
                <img src={IconoCerrar} alt="Icono para cerrar"/>
            </button>
            
        </div>

        <div className="o-botonesConfiguracion">
            <ul className="o-contenedorUl">
                <li><button onClick={() => {setstyleBoton1(0); setOpenEditarPerfil(true); setOpenGuardarDatosJardin(false)}} style={{borderBottom: styleBoton1 === 0 ? "4px solid #FACEFF" : "none"}}>Detalles perfil</button></li>
                <li><button onClick={() => {setstyleBoton1(1); setOpenEditarPerfil(false); setOpenGuardarDatosJardin(true)}} style={{borderBottom: styleBoton1 === 1 ? "4px solid #FACEFF" : "none"}}>Subir jardín</button></li>
                <li><button onClick={() => {setstyleBoton1(2); setOpenEditarPerfil(false); setOpenGuardarDatosJardin(false)}} style={{borderBottom: styleBoton1 === 2 ? "4px solid #FACEFF" : "none"}}>Mis jardines</button></li>
            </ul>
        </div>

        {OpenEditarPerfil && <SeccionEditarPerfilUsuario datosUsuario={archivoUsuarioJson}/>}
        {OpenGuardarDatosJardin && <SeccionGuardarDatosJardin identificadorUsuario={archivoUsuarioJson.id_usuario}/>}

    </div>)

}//Fin componente

export default PaginaConfiguracionPerfil;