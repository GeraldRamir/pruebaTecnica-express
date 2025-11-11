import countryRoutes from "./countries/country.routes"
import express from "express"
import cors from "cors"
import dotenv from "dotenv"

const app= express()

app.use(cors())
app.use(express.json())
app.use("/countries", countryRoutes)

dotenv.config()

const port = process.env.PORT || 3000

app.listen(port, ()=>{
    console.log("Server run...")
})

export default app