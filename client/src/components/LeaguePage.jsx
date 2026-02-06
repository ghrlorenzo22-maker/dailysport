import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { fetchLeagueData } from '../services/api';
import LeagueTable from './LeagueTable';
import RecentMatches from './RecentMatches';

const LeaguePage = () => {
    const { leagueId } = useParams();
    const [leagueData, setLeagueData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getLeagueData = async () => {
            try {
                const data = await fetchLeagueData(leagueId);
                setLeagueData(data);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        };

        getLeagueData();
    }, [leagueId]);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    return (
        <div className="league-page">
            <h1>{leagueData.name} Standings</h1>
            <LeagueTable standings={leagueData.standings} />
            <h2>Recent Matches</h2>
            <RecentMatches matches={leagueData.recentMatches} />
        </div>
    );
};

export default LeaguePage;