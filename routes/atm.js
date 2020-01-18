const express = require('express');
const { getAtm } = require('../controllers/atm');

const router = express.Router();


router.route('/').get(getAtm);




module.exports = router;