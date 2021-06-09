const express = require('express');
const router = express.Router();


const {add_user_data} = require('../controllers/user')

router.post('/add_user',add_user_data );

module.exports = router;