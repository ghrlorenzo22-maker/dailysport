const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const League = require('../models/League');
const Team = require('../models/Team');
const Player = require('../models/Player');
const Match = require('../models/Match');

const seedData = async () => {
    try {
        // Read JSON files
        const leaguesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../seed/leagues.2025-26.json')));
        const teamsData = JSON.parse(fs.readFileSync(path.join(__dirname, '../seed/teams.2025-26.json')));
        const playersData = JSON.parse(fs.readFileSync(path.join(__dirname, '../seed/players.2025-26.json')));
        const matchesData = JSON.parse(fs.readFileSync(path.join(__dirname, '../seed/matches.2025-26.json')));

        // Clear existing data
        await League.deleteMany({});
        await Team.deleteMany({});
        await Player.deleteMany({});
        await Match.deleteMany({});

        // Seed leagues
        const leagues = await League.insertMany(leaguesData);
        console.log('Leagues seeded:', leagues);

        // Seed teams
        const teams = await Team.insertMany(teamsData);
        console.log('Teams seeded:', teams);

        // Seed players
        const players = await Player.insertMany(playersData);
        console.log('Players seeded:', players);

        // Seed matches
        const matches = await Match.insertMany(matchesData);
        console.log('Matches seeded:', matches);

    } catch (error) {
        console.error('Error seeding data:', error);
    } finally {
        mongoose.connection.close();
    }
};

module.exports = seedData;