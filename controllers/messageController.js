import express from 'express'
const router = express.Router()
import {
    createMessage } from '../models/messageModel.js'

// Create
router.post('/', createMessage)



export default router