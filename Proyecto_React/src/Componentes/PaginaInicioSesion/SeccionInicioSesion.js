import React, {useContext, useState} from "react";
import "../../Estilos/PaginaInicioSesion/seccioniniciosesion.css";
import { InputRegistro } from "../PaginaRegistro/EntradasRegistro";
import { useNavigate } from "react-router-dom";
import VentanaModal from "../VentanaModal/ventanaModal";
import { DataContexto } from "../../ContextAPI/contextAPI";

//Componente que conservará las entradas para iniciar sesión
function SeccionInicioSesion(){

    const navigate = useNavigate();
    const [correoU, setCorreoU] = useState("");
    const [contraseñaU, setcontraseñaU] = useState("");

    const [Opendialog, setOpendialog] = useState(false);
    const {setarchivoUsuarioJson} = useContext(DataContexto);

    //Función que realiará un GET al servidor
    function solicitudGetHTTP(){
        fetch(`http://localhost:1234/usuariosesion/${correoU}/${contraseñaU}`)
        .then(respuesta => respuesta.json())
        .then(resultado => {resultado.mensaje === "No encontrado" ? setOpendialog(true) : navigate("/PaginaBusquedaJIC"); setarchivoUsuarioJson(resultado);});
    }//Fin función

    return(<div className="o-contenedorSeccionInicio">
        
        <div className="o-tituloInicioSesion">
            <h1>Bienvenido!</h1>
            <p>Por favor, ingresa tus datos para iniciar sesión</p>
        </div>

        <div className="o-lineaSeparadoraInicioSesion"/>

        {Opendialog && <VentanaModal Opendialog={Opendialog} set={setOpendialog}/>}

        <div className="o-contenedorEntradasInicioSesion">
            <InputRegistro nombreInput="Correo electrónico*" set={setCorreoU} tipo='text' ancho='25.313em' alto='1.5em'/>
            <InputRegistro nombreInput="Contraseña*" set={setcontraseñaU} tipo='password' ancho='25.313em' alto='1.5em'/>
        </div>

        <div className="o-contenedorBotonContraseña">
            <button type="">Olvidó la contraseña?</button>
        </div>

        <div className="o-contenedorBotonesInicioSesion">
            <button onClick={solicitudGetHTTP}>Ingresar</button>
            <button onClick={() => navigate("/PaginaRegistro")}>Registrarse</button>
        </div>

    </div>);
    
}//Fin componente

export default SeccionInicioSesion;