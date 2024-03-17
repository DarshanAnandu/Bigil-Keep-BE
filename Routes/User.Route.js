const express = require('express');
const router = express.Router();
const user = require('../Controllers/User.Controller')

router.post('/login', user.Login)
router.post('/Sign-up', user.Signup)

module.exports = router;