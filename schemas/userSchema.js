import { Schema, model} from 'mongoose'
import bcrypt from 'bcryptjs'


const userSchema = new Schema({
    firstName: {
        type: String,
        required: true
    },
    lastName: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    passwordHash: {
        type: String,
        required: true
    }



})


userSchema.pre("save", async function(next) {
    if(!this.isModified('passwordHash')) {
        next();
    }

    const salt = await bcrypt.genSalt(15)
    this.passwordHash = await bcrypt.hash(this.passwordHash, salt)
})




const User = model('User', userSchema)

export default User