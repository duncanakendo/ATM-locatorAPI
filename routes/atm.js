const express = require('express');
const { getAtm, addAtm } = require('../controllers/atm');

const router = express.Router();


router.route('/').get(getAtm).post(addAtm);




module.exports = router;