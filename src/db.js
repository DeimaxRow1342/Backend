import { createPool } from "mysql2/promise";


export const pool = createPool({
    host: 'localhost',
    user: 'root',
    password: 'SSCJD32806',
    port: '3306',
    database: 'petsdb'
})
