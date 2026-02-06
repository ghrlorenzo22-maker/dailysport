import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_API_BASE_URL || 'http://localhost:5000/api';

// Function to fetch league standings
export const fetchLeagues = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/leagues`);
        return response.data;
    } catch (error) {
        console.error('Error fetching leagues:', error);
        throw error;
    }
};

// Function to fetch team details by ID
export const fetchTeamById = async (teamId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/teams/${teamId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching team:', error);
        throw error;
    }
};

// Function to fetch player details by ID
export const fetchPlayerById = async (playerId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/players/${playerId}`);
        return response.data;
    } catch (error) {
        console.error('Error fetching player:', error);
        throw error;
    }
};

// Function to fetch match results
export const fetchMatches = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/matches`);
        return response.data;
    } catch (error) {
        console.error('Error fetching matches:', error);
        throw error;
    }
};