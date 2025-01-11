const mongoose = require('mongoose');

// Define the tourist spot schema
const TouristSpotSchema = new mongoose.Schema({
    id: Number, // ID of the tourist spot
    name: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    image: { type: String, required: true },
    comments: [
        {
            username: String,
            rating: Number,
            content: String,
            date: { type: Date, default: Date.now },
        },
    ],
});

// Create model
const TouristSpot = mongoose.model('TouristSpot', TouristSpotSchema);

module.exports = TouristSpot;
