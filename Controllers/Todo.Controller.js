const todo = require('../models/Todo.Model')

module.exports = {
    create: async (req, res) => {
        const id = req.body.id;
        const title = req.body.title;
        const content = req.body.content;
        const savTodo = new todo({ title: title, content: content })
        try {
            const uplTodo = await savTodo.save();
            res.status(201).json(uplTodo);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    get: async (req, res) => {
        try {
            const todos = await todo.find();
            res.status(201).json(todos);
        } catch (err) {
            res.status(500).json({ message: err.message });
        }
    },
    update: async (req, res) => {
        const id = req.body.id;
        const title = req.body.title;
        const content = req.body.content;
        // const savTodo = new todo({ id: id, title: title, content: content })
        try {
            console.log({ id: id, title: title, content: content })
            const update = await todo.findByIdAndUpdate(id, { id: id, title: title, content: content }, { new: true });
            console.log(update)
            if (!update) {
                return res.status(404).json({ message: 'Todo not found' })
            }
            res.status(201).json(update);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
    delete: async (req, res) => {
        const id = req.body.id;
        try {
            const isDelete = await todo.findByIdAndDelete(id);
            if (!isDelete) {
                return res.status(404).json({ message: 'Todo not found' })
            }
            res.status(201).json(isDelete);
        } catch (error) {
            res.status(500).json({ message: error.message })
        }
    },
}