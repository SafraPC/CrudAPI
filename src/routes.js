const express = require('express');
const {authController} = require('./controllers/authController');
const { sendText } = require('./controllers/sendText');
const router = express.Router();


router.post('/register',authController)
router.get('/text',sendText)


module.exports = router;