const mongoose = require('mongoose');

const teamSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    logo: {
        type: String,
        required: true,
    },
    stadium: {
        type: String,
        required: true,
    },
    coach: {
        type: String,
        required: true,
    },
    league: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'League',
        required: true,
    },
    players: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Player',
    }],
    stats: {
        matchesPlayed: {
            type: Number,
            default: 0,
        },
        wins: {
            type: Number,
            default: 0,
        },
        draws: {
            type: Number,
            default: 0,
        },
        losses: {
            type: Number,
            default: 0,
        },
        goalsFor: {
            type: Number,
            default: 0,
        },
        goalsAgainst: {
            type: Number,
            default: 0,
        },
    },
}, { timestamps: true });

module.exports = mongoose.model('Team', teamSchema);