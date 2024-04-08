import express from 'express'
const router = express.Router()
import {
    createMessage } from '../controllers/messageController.js'

// Create
router.post('/', createMessage)



export default router