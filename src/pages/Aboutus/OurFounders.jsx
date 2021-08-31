import React from 'react';

const OurFounders = () => {
    return(
        <>
            <div className="our-founders">
                <div className="text-ourfounder">
                <div className="heading-ourfounder">
                    <h1>OUR</h1>
                    <h1>FOUNDERS</h1>
                    </div>
                </div>
                <div className="ourfounders-box">
                    <div className="founder-content-box">
                        <div className="image-box-founder"><img className="sai-image" src="https://res.cloudinary.com/webwiznitr/image/upload/v1628923043/webwiz-portfolio/team-images/team-webwiz/sai%20sambhav%20chaini.jpg" alt=""/></div>
                        <div className="text-box-founder">
                            <div className="founder-name"><h1>SAI SAMBHAV</h1></div>
                            <div className="branch-college-name-founder">
                            <span className="text-founder-cofounder">
                                <h1>FOUNDER</h1>
                                </span>
                                <h1>Computer Science</h1>
                                <h1>NIT Rourkela</h1>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="ourfounders-box">
                    <div className="founder-content-box">
                        <div className="image-box-founder"><img className="shantanu-image" src="https://res.cloudinary.com/webwiznitr/image/upload/v1628944049/webwiz-portfolio/team-images/team-webwiz/kumar%20shantanu.jpg" alt=""/></div>
                        <div className="text-box-founder">
                            <div className="founder-name"><h1>SHANTANU</h1></div>
                            <div className="branch-college-name-founder">
                            <span className="text-founder-cofounder">
                            <h1>CO-FOUNDER</h1>
                            </span>
                                <h1>Electrical Engg.</h1>
                                <h1>NIT Rourkela</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default OurFounders;