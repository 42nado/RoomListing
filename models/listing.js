const mongoose = require('mongoose');
// require('mongoose-type-url');

const listingSchema = new mongoose.Schema({
    nameOfListing: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    addressmap:{
        type: String,
        required: true,
    },
    picture: {
        type: String,
        required: true,
    },
    category: {
        type: String,
        lowercase: true,
        // enum: ['Hotel', 'Cabin', 'Resort']
    },
    price: {
        type: Number,
        required: true,
    },
    createdAt: {
        type: Date,
        default: VarDate = Date.now(),
    },
    nameOfOwner: {
        type: String,
        required: true,
    },
    idOfOwner: {
        type: String,
    },
    comments: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Comment'
        }
    ]


})

const Listing = mongoose.model('Listing', listingSchema);

module.exports = Listing;