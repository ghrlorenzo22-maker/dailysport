const express = require('express');
const router = express.Router();
const teamController = require('../controllers/teamController');

// Get all teams
router.get('/', teamController.getAllTeams);

// Get a specific team by ID
router.get('/:id', teamController.getTeamById);

// Create a new team
router.post('/', teamController.createTeam);

// Update a team by ID
router.put('/:id', teamController.updateTeam);

// Delete a team by ID
router.delete('/:id', teamController.deleteTeam);

module.exports = router;