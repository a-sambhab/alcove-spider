import React from 'react';
import Navbar from '../components/Navbar';
import './landing.css';
const Landing = () => {
    return(
        <>
            <Navbar/>
            <div className="landing">
                <div className="left"></div>
                <div className="right"></div>
            </div>
        </>
    );
};

export default Landing;