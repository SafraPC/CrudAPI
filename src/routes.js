const express = require('express');
const { deleteAll } = require('./controllers/user/deleteAll');
const {authController} = require('./controllers/user/registerUser');
const { findAll } = require('./controllers/user/findAll');

const router = express.Router();

router.post('/user/register',authController);
router.get('/user/findAll',findAll);
router.delete('/user/deleteAll',deleteAll);

module.exports = router;