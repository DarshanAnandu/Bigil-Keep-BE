const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    // _id: { type: mongoose.Schema.ObjectId, auto: true }
    email: {
        type: String,
        required: true,
        lowercase: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
    },
});

userSchema.pre('save', async (next) => {
    try {
        if (this.isNew) {
            const salt = await bcrypt.genSalt(10)
            const hash = await bcrypt.hash(this.password, salt);
            this.password = hash;
        }
        next();
    } catch (err) {
        next(err);
    }
})

userSchema.methods.isValidPassword = async (p) => {
    try {
        return await bcrypt.compare(p, this.password)
    } catch (e) {
        throw e
    }
}

const user = mongoose.model('user', userSchema)
module.exports = user