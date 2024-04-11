import express from "express";
import dbConnect from "./server.js";
import productRoute from './controllers/productController.js'
import messageRoute from './controllers/messageController.js'
import userController from './controllers/userController.js'
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
app.use('/api/users', userController)

app.use(notFound)
app.use(errorHandler)



export default app

