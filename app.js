import express from "express";
import dbConnect from "./server.js";
import productRoute from './routes/productRoutes.js'
import messageRoute from './routes/messageRoutes.js'
import userRoutes from './routes/userRoutes.js'
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";

dbConnect()
const app = express();

const PORT = process.env.PORT || 8080
app.listen(PORT, () => console.log('Server running on: ' + PORT))




app.use(express.json())
app.use(express.urlencoded({ extended: false }))


// routes
app.use('/api/product', productRoute)
app.use('/api/message', messageRoute)
app.use('/api/users', userRoutes)
// app.use('/api/orders', orderRoutes)

app.use(notFound)
app.use(errorHandler)



export default app

