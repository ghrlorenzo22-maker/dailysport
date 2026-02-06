const express = require('express');
const router = express.Router();
const matchController = require('../controllers/matchController');

// Get all matches
router.get('/', matchController.getAllMatches);

// Get a specific match by ID
router.get('/:id', matchController.getMatchById);

// Create a new match
router.post('/', matchController.createMatch);

// Update an existing match
router.put('/:id', matchController.updateMatch);

// Delete a match
router.delete('/:id', matchController.deleteMatch);

module.exports = router;