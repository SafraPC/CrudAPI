const express = require('express');
const { deleteAll } = require('./controllers/user/deleteAll');
const {authController} = require('./controllers/user/registerUser');
const { findAll } = require('./controllers/user/findAll');
const {deleteOne} = require('./controllers/user/deleteOne');
const router = express.Router();

router.post('/user/register',authController);
router.get('/user',findAll);
router.delete('/user',deleteAll);
router.delete('/user/:id',deleteOne)

module.exports = router;