// import mongoose from 'mongoose'
import Message from '../models/messageModel.js'



// POST
export const createMessage = async (req, res) => {
    try {
        
        const { name, email, message } = req.body

        if(!name || !email || !message) {
            res.status(400)
            throw new Error('You need to enter the fields correctly')
        }

        const text = await Message.create({ name,
            email,
            message }) 

        if (!text) {
            return res.status(500).json({
                message: 'Something went wrong when creating message'
            });
        }

        res.status(200).json(message);
        
    } catch (err) {
        res.json({ 
            message: err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : null
        })
    }
}

