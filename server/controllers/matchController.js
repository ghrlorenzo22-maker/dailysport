// Daily-sport-plus/Daily-sport-plus/server/controllers/matchController.js

const Match = require('../models/Match');

// Get all matches
exports.getAllMatches = async (req, res) => {
    try {
        const matches = await Match.find();
        res.status(200).json(matches);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching matches', error });
    }
};

// Get match by ID
exports.getMatchById = async (req, res) => {
    try {
        const match = await Match.findById(req.params.id);
        if (!match) {
            return res.status(404).json({ message: 'Match not found' });
        }
        res.status(200).json(match);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching match', error });
    }
};

// Create a new match
exports.createMatch = async (req, res) => {
    const { homeTeam, awayTeam, date, homeGoals, awayGoals } = req.body;
    const newMatch = new Match({ homeTeam, awayTeam, date, homeGoals, awayGoals });

    try {
        const savedMatch = await newMatch.save();
        res.status(201).json(savedMatch);
    } catch (error) {
        res.status(400).json({ message: 'Error creating match', error });
    }
};

// Update a match
exports.updateMatch = async (req, res) => {
    try {
        const updatedMatch = await Match.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedMatch) {
            return res.status(404).json({ message: 'Match not found' });
        }
        res.status(200).json(updatedMatch);
    } catch (error) {
        res.status(400).json({ message: 'Error updating match', error });
    }
};

// Delete a match
exports.deleteMatch = async (req, res) => {
    try {
        const deletedMatch = await Match.findByIdAndDelete(req.params.id);
        if (!deletedMatch) {
            return res.status(404).json({ message: 'Match not found' });
        }
        res.status(200).json({ message: 'Match deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting match', error });
    }
};