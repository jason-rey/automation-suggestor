import mysql from 'mysql'
import { connectionOptions } from "../../config/mysql-db-config.js"

const dbPool = mysql.createPool(connectionOptions)

export {
    dbPool
}