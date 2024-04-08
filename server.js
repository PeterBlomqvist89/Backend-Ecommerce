import dotenv from 'dotenv'
import mongoose from 'mongoose'
dotenv.config()

const mongoUri = process.env.MONGO_URI

const dbConnect = async () => {
    try {
        if(!mongoUri) throw new Error('Please define the MONGO_URI variable inside the .env file')
        const db = await mongoose.connect(mongoUri)
        console.log('db connected');
    } catch (err) {
        console.log(err.message);
        process.exit(0)
    }
} 

export default dbConnect

