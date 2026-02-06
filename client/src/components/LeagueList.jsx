import React, { useEffect, useState } from 'react';
import { fetchLeagues } from '../services/api';

const LeagueList = () => {
    const [leagues, setLeagues] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getLeagues = async () => {
            try {
                const data = await fetchLeagues();
                setLeagues(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getLeagues();
    }, []);

    if (loading) {
        return <div>Loading leagues...</div>;
    }

    if (error) {
        return <div>Error fetching leagues: {error}</div>;
    }

    return (
        <div className="league-list">
            <h2 className="text-2xl font-bold mb-4">Leagues</h2>
            <ul>
                {leagues.map((league) => (
                    <li key={league.id} className="mb-2">
                        <a href={`/leagues/${league.id}`} className="text-blue-600 hover:underline">
                            {league.name}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LeagueList;