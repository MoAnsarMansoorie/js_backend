// require('dotenv').config({path: "./env"})
import dotenv from "dotenv"

import connectDb from "./db/index.js";
import app from "./app.js";

dotenv.config({
    path: "./env"
})

connectDb()
.then(() => {
    app.on("error", (err) => {
        console.log(`Error `, err)
        throw new err
    })
    app.listen(process.env.PORT || 8000, () => {
        console.log(`Server is running at Port`, process.env.PORT)
    })
})
.catch((err) => {
    console.log(`Mongodb connection failed !!!`, err)
})









/*
import express from "express"
const app = express()

(async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error", (err) => {
            console.log(`ERROR: `, err)
            throw new err
        })

        app.listen(process.env.PORT, () => {
            console.log(`Server is started at Port http://localhost:${process.env.PORT}`)
        })

    } catch (error) {
        console.log(`ERROR: `, error)
        throw new error
    }
})()

*/