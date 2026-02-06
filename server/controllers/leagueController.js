const League = require('../models/League');

// Get all leagues
exports.getAllLeagues = async (req, res) => {
    try {
        const leagues = await League.find();
        res.status(200).json(leagues);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching leagues', error });
    }
};

// Get league by ID
exports.getLeagueById = async (req, res) => {
    const { id } = req.params;
    try {
        const league = await League.findById(id);
        if (!league) {
            return res.status(404).json({ message: 'League not found' });
        }
        res.status(200).json(league);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching league', error });
    }
};

// Create a new league
exports.createLeague = async (req, res) => {
    const newLeague = new League(req.body);
    try {
        const savedLeague = await newLeague.save();
        res.status(201).json(savedLeague);
    } catch (error) {
        res.status(400).json({ message: 'Error creating league', error });
    }
};

// Update a league
exports.updateLeague = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedLeague = await League.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedLeague) {
            return res.status(404).json({ message: 'League not found' });
        }
        res.status(200).json(updatedLeague);
    } catch (error) {
        res.status(400).json({ message: 'Error updating league', error });
    }
};

// Delete a league
exports.deleteLeague = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedLeague = await League.findByIdAndDelete(id);
        if (!deletedLeague) {
            return res.status(404).json({ message: 'League not found' });
        }
        res.status(200).json({ message: 'League deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting league', error });
    }
};