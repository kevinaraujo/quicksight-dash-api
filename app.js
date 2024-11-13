import express from 'express'
import urlRoutes from './routes/urlRoutes.js'
import dotenv from 'dotenv';

const app = express()
const port = 3001

dotenv.config()

app.use("/url", urlRoutes)
app.listen(port, () => {
    console.log("server up")
})