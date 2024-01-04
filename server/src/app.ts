import express, { Request, Response } from "express";
import helmet from 'helmet'

import { dbPool } from "./models/databases/mysql-db.js";


const thing = async () => {
    // await dbPool.query("select * from userData", (result, err) => {
    //     console.log(result)

    //     console.log("done query")
    //     return
    // })

    console.log("done func")
}

thing()


const app = express()
app.use(express.json())
app.use(helmet())
app.use(express.urlencoded({extended: true}))

app.get("/", (req: Request, res: Response) => {
    return res.send("hi")
})

app.listen(3000, () => {
    console.log("listening on 3000")
})