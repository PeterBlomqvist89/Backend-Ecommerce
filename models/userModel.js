import User from '../schemas/userSchema.js'
import asyncHandler from 'express-async-handler'

const registerUser = asyncHandler(async (req, res) => {
    const { firstName, lastName, email, password } = req.body;

    if(!firstName || !lastName || !email || !password) {
        res.status(400)
        throw new Error('You need to enter all the fields')
    }

    const userExists = await User.exists({ email })

    if(userExists) {
        res.status(400)
        throw new Error('The email address is already taken')
    }

    const user = await User.create({
        firstName,
        lastName,
        email,
        passwordHash: password
    })

    res.status(201).json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email
        // Token
    })

})


const loginUser = asyncHandler(async (req, res) => {
    res.json({ message: 'login user'})

    
})


export {
    registerUser,
    loginUser
}


