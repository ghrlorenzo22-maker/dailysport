const request = require('supertest');
const app = require('../app'); // Import the Express app

describe('API Endpoints', () => {
    // Test for getting all leagues
    it('GET /api/leagues should return all leagues', async () => {
        const response = await request(app).get('/api/leagues');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    // Test for getting a specific league by ID
    it('GET /api/leagues/:id should return a league', async () => {
        const leagueId = 'some-league-id'; // Replace with a valid league ID from your seed data
        const response = await request(app).get(`/api/leagues/${leagueId}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name'); // Assuming league has a name property
    });

    // Test for getting all teams
    it('GET /api/teams should return all teams', async () => {
        const response = await request(app).get('/api/teams');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    // Test for getting a specific team by ID
    it('GET /api/teams/:id should return a team', async () => {
        const teamId = 'some-team-id'; // Replace with a valid team ID from your seed data
        const response = await request(app).get(`/api/teams/${teamId}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('name'); // Assuming team has a name property
    });

    // Test for getting all matches
    it('GET /api/matches should return all matches', async () => {
        const response = await request(app).get('/api/matches');
        expect(response.status).toBe(200);
        expect(Array.isArray(response.body)).toBe(true);
    });

    // Test for getting a specific match by ID
    it('GET /api/matches/:id should return a match', async () => {
        const matchId = 'some-match-id'; // Replace with a valid match ID from your seed data
        const response = await request(app).get(`/api/matches/${matchId}`);
        expect(response.status).toBe(200);
        expect(response.body).toHaveProperty('homeTeam'); // Assuming match has a homeTeam property
    });
});