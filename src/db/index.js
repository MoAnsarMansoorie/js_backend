import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDb = async () => {
    try {
        const connectionInstance = await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\nMongoDb connected || DB Host: ${connectionInstance.connection.host}`)
        
    } catch (error) {
        console.log(`Mongodb connection Error: `, error)
        process.exit(1)

    }
}

export default connectDb;