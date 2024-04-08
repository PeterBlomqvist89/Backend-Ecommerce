import express from 'express'
const router = express.Router()
import {
    createProduct,
    getProduct,
    updateProduct,
    deleteProduct } from '../controllers/productController.js'

// Create
router.post('/', createProduct)

// Read 
router.get('/', getProduct)

// Update
router.put('/:id', updateProduct)

// Delete
router.delete('/:id', deleteProduct)






export default router