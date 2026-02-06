const mongoose = require('mongoose');

const matchSchema = new mongoose.Schema({
    homeTeam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    },
    awayTeam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
        required: true
    },
    date: {
        type: Date,
        required: true
    },
    homeGoals: {
        type: Number,
        required: true,
        default: 0
    },
    awayGoals: {
        type: Number,
        required: true,
        default: 0
    },
    league: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'League',
        required: true
    },
    season: {
        type: String,
        required: true
    }
}, { timestamps: true });

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;