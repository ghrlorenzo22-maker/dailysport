import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header className="bg-blue-600 text-white p-4">
            <div className="container mx-auto flex justify-between items-center">
                <h1 className="text-2xl font-bold">
                    <Link to="/">Daily Sport+</Link>
                </h1>
                <nav>
                    <ul className="flex space-x-4">
                        <li>
                            <Link to="/leagues" className="hover:underline">Leagues</Link>
                        </li>
                        <li>
                            <Link to="/teams" className="hover:underline">Teams</Link>
                        </li>
                        <li>
                            <Link to="/players" className="hover:underline">Players</Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    );
};

export default Header;