import User from '../schemas/userSchema.js'
import asyncHandler from 'express-async-handler'
import generateToken from '../utils/generateToken.js';

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

    const token = generateToken(user)

    res.status(201).json({
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token
    })

})

const loginUser = asyncHandler(async (req, res) => {
    const { email, password } = req.body

    if(!email || !password) {
        res.status(400)
        throw new Error('You need to enter all the fields')
    }

    const user = await User.findOne({ email })

    if(!user) {
        res.status(401)
        throw new Error('Incorrect credentials')
    }

    if(!user.matchPassword(password)) {
        res.status(401)
        throw new Error('Incorrect credentials')
    }

    res.status(200).json({ 
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
        token: generateToken(user) 
    })

})

export {
    registerUser,
    loginUser
}


