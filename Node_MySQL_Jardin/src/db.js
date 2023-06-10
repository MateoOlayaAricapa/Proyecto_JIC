//Importando elementos necesarios para comunicarse con la base de datos
import {createPool} from "mysql2/promise";

export const connection = createPool({
    host: 'localhost',
    user: 'root',
    database: 'jardines',
    password: '1234',
    port: '3306'
});