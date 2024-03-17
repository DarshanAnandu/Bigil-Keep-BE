const express = require('express');
const router = express.Router();
const todo = require('../Controllers/Todo.Controller')

router.get('/', todo.get)
router.post('/create', todo.create)
router.put('/update', todo.update)
router.delete('/delete', todo.delete)

module.exports = router;