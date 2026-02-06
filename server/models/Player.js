const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    position: {
        type: String,
        required: true
    },
    team: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    },
    goals: {
        type: Number,
        default: 0
    },
    assists: {
        type: Number,
        default: 0
    },
    appearances: {
        type: Number,
        default: 0
    },
    nationality: {
        type: String,
        required: true
    },
    image: {
        type: String,
        default: ''
    }
}, { timestamps: true });

module.exports = mongoose.model('Player', playerSchema);