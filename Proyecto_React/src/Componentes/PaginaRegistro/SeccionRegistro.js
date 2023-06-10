import React, { useState, useContext } from "react";
import "../../Estilos/PaginaRegistro/seccionregistro.css";
import {InputRegistro} from "../../Componentes/PaginaRegistro/EntradasRegistro";
import { useNavigate } from "react-router-dom";
import { DataContexto } from "../../ContextAPI/contextAPI";

//Componente que contendrá todos los elementos para registrarse
function SeccionRegistro(){

    const [nombre, setnombre] = useState("");
    const [apellido, setapellido] = useState("");
    const [correo, setcorreo] = useState("");
    const [contraseña, setcontraseña] = useState("");
    const [departamento, setdepartamento] = useState("Valle del Cauca");
    const [ciudad, setciudad] = useState("Cali");
    const [foto, setfoto] = useState("https://d500.epimg.net/cincodias/imagenes/2016/07/04/lifestyle/1467646262_522853_1467646344_noticia_normal.jpg");

    const {setarchivoUsuarioJson} = useContext(DataContexto);

    const arregloVericacionDatosUsuario = [{valorU: nombre}, {valorU: apellido},
        {valorU: correo}, {valorU: contraseña}]

    let navegacion = useNavigate();

    //Función que realizará una solicitud mediante POST al servidor Node.js
    function SolicitudHTTP(){

        //Variable que cambiará según si todos los campos están llenos o falta alguno por ingresar un valor
        let enviarDatosUsuario = true;

        for (let l = 0; l < arregloVericacionDatosUsuario.length; l++) {
            
            if(arregloVericacionDatosUsuario[l].valorU === ""){

                enviarDatosUsuario = false;

            }//Fin condición
            
        }//Fin ciclo for

        if(enviarDatosUsuario === true){

            const reqHTTP = {
                method: "POST",
                headers: {"Content-Type":"application/json; charset=utf-8"},
                body: JSON.stringify({"nombre": nombre, 
                "apellido": apellido, 
                "correo": correo,
                "contraseña": contraseña,
                "departamento": departamento,
                "ciudad": ciudad,
                "foto": foto
            })
            };
    
            fetch("http://localhost:1234/guardarusuario", reqHTTP)
            .then(respuesta => respuesta.json())
            .then(resultado => {

                if(resultado.mensaje !== 'Error al guardar los datos'){

                    setarchivoUsuarioJson({
                        id_usuario: resultado.resultados.insertId,
                        nombre: nombre,
                        apellido: apellido,
                        correo: correo,
                        contraseña: contraseña,
                        departamento: departamento,
                        ciudad: ciudad,
                        foto_usuario: foto
                    });

                    navegacion("/PaginaBusquedaJIC");

                }else{

                   alert("Error al guardar los datos. Revisa de nuevo los campos de datos.");

                }//Fin condición

            });

        }else if(enviarDatosUsuario === false){

            alert("Verifica que no haya un campo vacío. Ingresa todos los datos correspondientes, por favor.");

        }//Fin condición

    }//Fin función

    return(<div className="o-contenedorSeccionRegistro">
        
        <div className="o-seccionTituloRegistro">
            <h1>Registrate gratis!</h1>
            <h2>Ingresa los datos solicitados para consumir el servicio de JIC</h2>
        </div>

        <div className="o-lineaDivisora"/>
            
        <div className="o-contenedorEntradasRegistro">

            <div className="o-contenedorNombreApellido">
                <InputRegistro nombreInput="Nombre" set={setnombre} tipo="text" ancho='11.125em' alto='1.5em'/>
                <InputRegistro nombreInput="Apellido" set={setapellido} tipo="text" ancho='11.125em' alto='1.5em'/>
            </div>
           
            <InputRegistro nombreInput="Correo electrónico" set={setcorreo} tipo="text" ancho='25.313em' alto='1.5em'/>
            <InputRegistro nombreInput="Contraseña" set={setcontraseña} tipo="password" ancho='25.313em' alto='1.5em'/>
        
        </div>

        <div className="o-botonCrearCuenta">
            <button onClick={SolicitudHTTP} type="button">Crear cuenta</button>
        </div>

    </div>);

}//Fin componente

export default SeccionRegistro;