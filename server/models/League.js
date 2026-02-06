const mongoose = require('mongoose');

const leagueSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    country: {
        type: String,
        required: true,
    },
    season: {
        type: String,
        required: true,
    },
    teams: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Team',
    }],
    standings: [{
        team: {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Team',
        },
        position: {
            type: Number,
            required: true,
        },
        points: {
            type: Number,
            required: true,
        },
        played: {
            type: Number,
            required: true,
        },
        won: {
            type: Number,
            required: true,
        },
        drawn: {
            type: Number,
            required: true,
        },
        lost: {
            type: Number,
            required: true,
        },
        goalsFor: {
            type: Number,
            required: true,
        },
        goalsAgainst: {
            type: Number,
            required: true,
        },
    }],
}, { timestamps: true });

const League = mongoose.model('League', leagueSchema);

module.exports = League;