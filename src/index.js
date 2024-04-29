// require('dotenv').config({path: "./env"})
import dotenv from "dotenv"

import connectDb from "./db/index.js";

dotenv.config({
    path: "./env"
})

connectDb()









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