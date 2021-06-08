const express = require('express');
const router = express.Router();

//Controllers
var {retHomeBrand, addHomeBrand} = require('../controllers/home');



router.get('/gethomepagebrand',retHomeBrand );
router.get('/addHomeBrand',addHomeBrand );


module.exports = router;