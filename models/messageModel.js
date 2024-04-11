import asyncHandler from 'express-async-handler';

export const createMessage = asyncHandler(async (req, res) => {
    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        res.status(400).json({ message: 'You need to enter all the fields correctly' });
        return; 
    }

    const createdMessage = { name, email, message };
    
    res.status(200).json(createdMessage);
});