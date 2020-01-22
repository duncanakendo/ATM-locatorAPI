const mongoose = require('mongoose');
const geocoder = require('../utils/geocoder');

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

// Geocode & create location
AtmSchema.pre('save', async function(next) {
    const loc = await geocoder.geocode(this.address);
    this.location = {
        type: 'point',
        coordinates:[loc[0].longitude, loc[0].latitude],
        formattedAddress:loc[0].formattedAddress
    }
    //Donot save address
    this.address= undefined;
    next();
});

module.exports = mongoose.model('Atm', AtmSchema);