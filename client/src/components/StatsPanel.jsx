import React from 'react';

const StatsPanel = ({ topScorers, assistLeaders }) => {
    return (
        <div className="stats-panel">
            <h2 className="text-xl font-bold mb-4">Statistics</h2>
            <div className="top-scorers mb-6">
                <h3 className="text-lg font-semibold">Top Scorers</h3>
                <ul>
                    {topScorers.map((player) => (
                        <li key={player.id} className="flex justify-between py-2">
                            <span>{player.name}</span>
                            <span>{player.goals} Goals</span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="assist-leaders">
                <h3 className="text-lg font-semibold">Assist Leaders</h3>
                <ul>
                    {assistLeaders.map((player) => (
                        <li key={player.id} className="flex justify-between py-2">
                            <span>{player.name}</span>
                            <span>{player.assists} Assists</span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default StatsPanel;