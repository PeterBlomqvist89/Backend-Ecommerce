import mongoose from 'mongoose'
import Product from '../schemas/productSchema.js'
import asyncHandler from 'express-async-handler';



// POST
export const createProduct = asyncHandler(async (req, res) => {
    const { name, price, description, category, images } = req.body;

    if (!name || !price || !description || !category || !images) {
        res.status(400).json({ message: 'You need to enter all product details correctly' });
        return;
    }

    const product = await Product.create({ name, price, description, category, images });

    if (!product) {
        res.status(500).json({ message: 'Something went wrong when creating product' });
        return;
    }

    res.status(201).json(product);
});

// GET all
export const getProduct = asyncHandler(async (req, res) => {
    const products = await Product.find();
    res.status(200).json(products);
});

// GET by id
export const getProductById = asyncHandler(async (req, res) => {
    const id = req.params.id;

    if (!mongoose.isValidObjectId(id)) {
        res.status(400);
        throw new Error('You need to provide a valid ObjectId');
    }

    const product = await Product.findById(id);

    if (!product) {
        res.status(404);
        throw new Error('Product id not found');
    }

    res.json(product);
});

// PUT
export const updateProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;

    if (!mongoose.isValidObjectId(id)) {
        res.status(400);
        throw new Error('You need to provide a valid ObjectId');
    }

    const product = await Product.findByIdAndUpdate(id, req.body, { new: true });

    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }

    res.json(product);
});

// Delete
export const deleteProduct = asyncHandler(async (req, res) => {
    const id = req.params.id;

    if (!mongoose.isValidObjectId(id)) {
        res.status(400);
        throw new Error('You need to provide a valid ObjectId');
    }

    const product = await Product.findByIdAndDelete(id);

    if (!product) {
        res.status(404);
        throw new Error('Product not found');
    }

    res.json({ message: 'Product deleted', deletedProductId: product._id });
});
