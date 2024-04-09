
export const createMessage = async (req, res) => {
    try {
        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            res.status(400).json({ message: 'You need to enter all the fields correctly' });
            return; 
        }

        
        const createdMessage = { name, email, message };
        
        res.status(200).json(createdMessage);
    } catch (err) {
        res.status(500).json({ 
            message: 'Something went wrong',
            error: err.message
        });
    }
}