import React from 'react';
import TextTransition, { presets } from "react-text-transition";
import About from '../components/About';
import Services from '../components/Services';
import Shop from '../components/Shop';
import './landing.css';
const Landing = () => {
    const Text = [
        "Dynamic",
        "Dreams",
        "Design"
    ];
    const [index, setIndex] = React.useState(0);

    React.useEffect(() => {
        const intervalId = setInterval(() =>
            setIndex(index => index + 1),
            2000 // every 3 seconds
            );
            return () => clearTimeout(intervalId);
        }, []);
    return(
        <>
            
            <div id="home" className="landing">

                <div className="left-landing">
                    <div className="text-box-landing">
                        <div className="heading-landing"><h1>ALCOVE</h1></div>
                        <div className="subheading-landing"><h2>
                            <TextTransition
                                text={ Text[index % Text.length]}
                                springConfig={presets.gentle}
                            />
                        </h2></div>
                    </div>

                </div>

                <div className="right-landing">
                    <div className="image-box-right-landing"><img className="image-right-landing" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630352710/alcove/landing_2_mtdftd.jpg" alt="landing"></img></div>
                    <div className="vertical-box-landing">
                    <div className="vertical-text"><h1>INTERIOR</h1></div>
                    </div>
                </div>

                <div className="bottom-info">
                    <div className="infobox">
                        <span className="infohead">$5.2 M</span>
                        <span className="infocon">Worth Revenue</span>
                    </div>
                    <div className="infobox">
                        <span className="infohead">5.6K+</span>
                        <span className="infocon">Homes Built</span>
                    </div>
                    <div className="infobox">
                        <span className="infohead">200K+</span>
                        <span className="infocon">Happy Clients</span>
                    </div>
                    <div className="infobox last">
                        <span className="infohead">4.8</span>
                        <span className="infocon">Review</span>
                    </div>
                </div>
            </div>
            <About/>
            <Services/>
            <Shop/>
        </>
    );
};

export default Landing;