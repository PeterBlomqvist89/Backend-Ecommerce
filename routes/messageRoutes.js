import express from 'express'
const router = express.Router()
import {
    createMessage } from '../controller/messageController.js'

// Create
router.post('/', createMessage)



export default router