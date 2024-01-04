import { dbPool } from "./databases/mysql-db.js"

class User {
    username: string
    password: string

    constructor(username: string, password: string) {
        this.username = username
        this.password = password
    }

    async createUserToDb() {
        try {
            await dbPool.query("")
        } catch (err) {
            console.log("error creating user: " + err)
        } 
    }
}