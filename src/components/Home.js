import React, { useContext } from 'react';
import { AuthContext } from '../contexts/UserContext';

const Home = () => {
    const {user} = useContext(AuthContext);
    return (
        <div className='min-h-screen'>
            <h2>Home Page {user?.email}</h2>
        </div>
    );
};

export default Home;