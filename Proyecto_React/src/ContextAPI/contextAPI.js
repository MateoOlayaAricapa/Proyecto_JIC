import { createContext, useState } from "react";

//Creando la lógica para guardar el archivo json en un context API para ser utilizada por cualquier componente
export const DataContexto = createContext();

export function DataContextProvider({children}){

    const [archivoUsuarioJson, setarchivoUsuarioJson] = useState({});

    return(<DataContexto.Provider value={{archivoUsuarioJson, setarchivoUsuarioJson}}>
            {children}
        </DataContexto.Provider>);

}//Fin componente