// Daily-sport-plus/Daily-sport-plus/server/controllers/teamController.js

const Team = require('../models/Team');

// Get all teams
exports.getAllTeams = async (req, res) => {
    try {
        const teams = await Team.find();
        res.status(200).json(teams);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching teams', error });
    }
};

// Get a team by ID
exports.getTeamById = async (req, res) => {
    const { id } = req.params;
    try {
        const team = await Team.findById(id);
        if (!team) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ message: 'Error fetching team', error });
    }
};

// Create a new team
exports.createTeam = async (req, res) => {
    const newTeam = new Team(req.body);
    try {
        const savedTeam = await newTeam.save();
        res.status(201).json(savedTeam);
    } catch (error) {
        res.status(400).json({ message: 'Error creating team', error });
    }
};

// Update a team by ID
exports.updateTeam = async (req, res) => {
    const { id } = req.params;
    try {
        const updatedTeam = await Team.findByIdAndUpdate(id, req.body, { new: true });
        if (!updatedTeam) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json(updatedTeam);
    } catch (error) {
        res.status(400).json({ message: 'Error updating team', error });
    }
};

// Delete a team by ID
exports.deleteTeam = async (req, res) => {
    const { id } = req.params;
    try {
        const deletedTeam = await Team.findByIdAndDelete(id);
        if (!deletedTeam) {
            return res.status(404).json({ message: 'Team not found' });
        }
        res.status(200).json({ message: 'Team deleted successfully' });
    } catch (error) {
        res.status(500).json({ message: 'Error deleting team', error });
    }
};