import mysql from 'mysql2/promise'
import { config } from "./config";

export const conection = async () => {
    return await mysql.createConnection(config)
}

conection()