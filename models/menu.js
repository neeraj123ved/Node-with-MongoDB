const mongoose = require('mongoose');
const menuItemSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    taste: {
        type: String,
        enum: ['spicy', 'sweet', 'sour'],
        required: true
    },
    is_drink: {
        type: Boolean,
        required: true
    },
    ingredient: {
        type: [String],
        default: []
    }
});

// menu item model

const MenuItem = mongoose.model('MenuItem', menuItemSchema);
module.exports = MenuItem;
