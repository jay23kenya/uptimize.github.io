const express = require('express')
const router = express.Router();


// Contact Controller
const ContactController = require('../controllers/Contact')

//@route /api/contact

//Add a new Contact
router.post('/',ContactController.submitContact)

module.exports = router;