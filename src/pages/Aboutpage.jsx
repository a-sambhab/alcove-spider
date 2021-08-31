import React from 'react';
import './Aboutpage.css'
import AboutTop from './Aboutus/AboutTop';
import OurDesigners from './Aboutus/OurDesigners';
import AboutCompany from './Aboutus/AboutCompany';
import LatestProjects from './Aboutus/LatestProjects';
import OurFounders from './Aboutus/OurFounders';


const AboutPage = () => {
    return(
        <>
        <AboutTop />
        <AboutCompany/>
        <OurDesigners/>
        <LatestProjects/>
        <OurFounders/>
        </>
    );
};

export default AboutPage;