import mongoose from "mongoose";

export const dbConnect = async () => {
    try {
        const conn = await mongoose.connect(process.env.MONGODB_URI)
        console.log(`MongoDB server sucessfully connected: ${conn.connection.host}`)
    } catch (err) {
        console.log("Failed to connect to Database ", err.message)
        process.exit(1)
    }
}