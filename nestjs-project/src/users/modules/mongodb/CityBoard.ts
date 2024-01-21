import mongoose, { Schema } from 'mongoose';

const CityBoard = new mongoose.Schema({
    country: {
        type: String,
        trim: true,
        // lowercase: true,
        enum: ['IL', 'UK', 'USA'],
        default: 'IL',
    },
    city: {
        type: String,
        trim: true,
        // lowercase: true,
        enum: ['Jerusalem', 'Tel Aviv', 'Safed', 'London', 'Borough Park', 'Beer Sheva'], // Add enum for valid city values
        default: 'Jerusalem',
    },
});

// const CityBoardModel = mongoose.model('CityBoard', CityBoardSchema);

export default CityBoard;