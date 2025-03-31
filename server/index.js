import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import { dbConnect } from './App/lib/db.js'
import petRoutes from './App/routes/web/petEnquiry.js'
dotenv.config()
const app = express()
app.use(cors())
app.use(express.json())

app.use("/api", petRoutes)

app.listen(process.env.PORT || 3000, () => {
    console.log(`Server running at port ${process.env.PORT || 3000}`)
    dbConnect()
})