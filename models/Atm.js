const mongoose = require('mongoose');


const AtmSchema = new mongoose.Schema({
      atmId: {
          type: String,
          required: [true, 'Please add atm ID'],
          unique: true,
          trim: true,
          maxlength: [10, 'Atm ID must be less than 10 characters']
        
      },
      address: {
         type: String,
         required: [true, 'Please add an address']
      },
    location: {
        type: {
            type: String, 
            enum: ['Point'], 
           
        },
        coordinates: {
            type: [Number],
            index: '2dsphere'
        },
        formattedAddress: String

        
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

module.exports = mongoose.model('Atm', AtmSchema);