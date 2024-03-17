const express = require('express');
const bodyParser = require('body-parser');
var cors = require('cors');
const todo = require('./Routes/Todo.Route');
const users = require('./Routes/User.Route');
// const { logger } = require('update/lib/utils');
require('dotenv').config()
require('./helpers/init_mdb.js')
const app = express();

app.use(bodyParser.json());
app.use(cors())
app.options('*', cors());
// app.use(logger)
// app.get('/', (req, res, next) => {
//     res.send('<h1>Welcome Bigilee!</h1>');
// })
app.post('/calculate', (req, res, next) => {
    const a = parseFloat(req.body.a);
    const b = parseFloat(req.body.b);

    if (isNaN(a) || isNaN(b)) {
        return res.status(400).send('Invalid input');
    }

    const result = a * b;
    res.send(result.toString());
});
app.use(users)
app.use(todo)
app.use((req, res, next) => {
    res.status(404).send('There was an error')
})

app.listen(process.env.PORT, console.log(`listening on http://localhost:${process.env.PORT}`))