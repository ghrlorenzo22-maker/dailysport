import React from 'react';
import LeagueList from '../components/LeagueList';
import StatsPanel from '../components/StatsPanel';

const Home = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-3xl font-bold mb-4">Welcome to Daily Sport+</h1>
            <p className="mb-6">Your go-to source for football statistics and information for the 2025/2026 season.</p>
            <h2 className="text-2xl font-semibold mb-2">Leagues</h2>
            <LeagueList />
            <h2 className="text-2xl font-semibold mt-8 mb-2">Top Statistics</h2>
            <StatsPanel />
        </div>
    );
};

export default Home;