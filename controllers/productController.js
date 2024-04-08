import mongoose from 'mongoose'
import Product from '../models/productModel.js'



// POST
export const createProduct = async (req, res) => {
    try {
        
        const { name, price, description, category, images } = req.body

        if(!name || !price || !description || !category || !images) {
            res.status(400)
            throw new Error('You need to enter product')
        }

        const product = await Product.create({ name,
            price,
            description,
            category,
            images }) 

        if (!product) {
            return res.status(500).json({
                message: 'Something went wrong when creating product'
            });
        }

        res.status(201).json(product);
        
    } catch (err) {
        res.json({ 
            message: err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : null
        })
    }
}

// GET
export const getProduct = async (req, res) => {

    try {
        const product = await Product.find()
        res.status(201).json(product)
        
    } catch (err) {
        res.json({ 
            message: err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : null
        })
    }


}

// PUT
export const updateProduct = async (req, res) => {

    try {

        const id = req.params.id
        if(!mongoose.isValidObjectId(id)) {
            res.status(400)
            throw new Error('You need to provide a valid ObjectId')
        }

        const product = await Product.findByIdAndUpdate(id, req.body, { new: true })
        
        if(!product) {
            res.status(404)
            throw new Error('Product not found')
        }

        res.status(200).json(product)


    } catch (err) {
        res.json({ 
            message: err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : null
        })
    }

}

// Delete
export const deleteProduct = async (req, res) => {
    try {

        const id = req.params.id
        if(!mongoose.isValidObjectId(id)) {
            res.status(400)
            throw new Error('You need to provide a valid ObjectId')
        }
        const product = await Product.findByIdAndDelete(id)

        if(!product) {
            res.status(404)
            throw new Error('Product not found')
        }

        res.status(200).json( product._id )
        
    } catch (err) {
        res.json({ 
            message: err.message,
            stack: process.env.NODE_ENV === 'development' ? err.stack : null
        })
    }
}
