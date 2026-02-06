import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import StatsPanel from './StatsPanel';
import Pagination from './Pagination';

const TeamPage = () => {
    const { teamId } = useParams();
    const [team, setTeam] = useState(null);
    const [players, setPlayers] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeamData = async () => {
            try {
                const response = await api.get(`/teams/${teamId}`);
                setTeam(response.data);
                setPlayers(response.data.players);
            } catch (err) {
                setError('Failed to fetch team data');
            } finally {
                setLoading(false);
            }
        };

        fetchTeamData();
    }, [teamId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>{error}</div>;

    return (
        <div className="team-page">
            <h1>{team.name}</h1>
            <img src={team.logo} alt={`${team.name} logo`} />
            <h2>Squad</h2>
            <ul>
                {players.map(player => (
                    <li key={player.id}>
                        {player.name} - Goals: {player.goals} - Assists: {player.assists}
                    </li>
                ))}
            </ul>
            <StatsPanel teamId={teamId} />
            <Pagination />
        </div>
    );
};

export default TeamPage;