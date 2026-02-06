const express = require('express');
const router = express.Router();
const leagueController = require('../controllers/leagueController');

// Route to get all leagues
router.get('/', leagueController.getAllLeagues);

// Route to get a specific league by ID
router.get('/:id', leagueController.getLeagueById);

// Route to create a new league
router.post('/', leagueController.createLeague);

// Route to update an existing league by ID
router.put('/:id', leagueController.updateLeague);

// Route to delete a league by ID
router.delete('/:id', leagueController.deleteLeague);

module.exports = router;