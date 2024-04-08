import express from "express";
import dbConnect from "./server.js";
import productRoute from './Routes/productRoute.js'

dbConnect()
const app = express();

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('Server running on: ' + PORT))




app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// routes
app.use('/api/product', productRoute)

export default app