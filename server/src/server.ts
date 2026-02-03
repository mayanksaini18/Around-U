
import express from "express"
import cors from "cors"
import dotenv from "dotenv"
import connectDB from "./config/db.js";
import searchRoutes from "./routes/search.route.js";

dotenv.config()

const app = express()

app.use(express.json())
app.use(cors())

connectDB()

app.use("/api/search" ,searchRoutes);

app.get("/" ,(req,res) => {
    res.send("backend is running ")
})
const port = process.env.PORT ||4999;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})

