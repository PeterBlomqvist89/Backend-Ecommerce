import express from 'express'
const router = express.Router()
import {
    createProduct,
    getProduct,
    getProductById,
    updateProduct,
    deleteProduct, } from '../controllers/productController.js'

// Create
router.post('/', createProduct)

// Read all
router.get('/', getProduct)

// Read id
router.get('/:id', getProductById);

// Update
router.put('/:id', updateProduct)

// Delete
router.delete('/:id', deleteProduct)






export default router