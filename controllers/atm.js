const Atm = require('../models/Atm');
//@desc get all atms
//@route Get /api/v1/atm
// @accss Public

exports.getAtm = async ( req, res,  next) => {
    try {
       const atm = await Atm.find();
       
        return res.status(200).json({
          success: true,
          count: atm.length,
          data: atm
        });
    } catch (err) {
         console.error(err);
         res.staus(500).json({ error: 'Server error'});
         
    }
};