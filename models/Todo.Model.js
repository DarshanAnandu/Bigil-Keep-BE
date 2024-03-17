const mongoose = require('mongoose');

const todoSchema = new mongoose.Schema({
    _id: { type: mongoose.Schema.ObjectId, auto: true },
    // user_id: { type: mongoose.Schema.ObjectId, required: true },
    title: { type: 'string' },
    content: { type: 'string' }
})
const todo = mongoose.model('Todo', todoSchema);
module.exports = todo;