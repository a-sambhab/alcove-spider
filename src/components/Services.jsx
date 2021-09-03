import React from 'react';
import './services.css';

const Services = () => {
    return(
        <>
            <div className="service" >
                <div className="servicehead">
                    <h1>SERVICES</h1>
                <div className="svg-servicesection-topleftdiv"><img classname="svg-servicesection-topleft" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630684569/alcove/orange_top_left_z7kpbg.svg" alt=""/></div>
                {/* <div className="svg-servicesection-toprightdiv"><img classname="svg-servicesection-topright" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630690494/alcove/orange_top_right_dp4bdh.svg" alt=""/></div> */}
                </div>
                <div className="servicecon">
                    <div id="serimg1" className="servicecard">
                        <img  alt="serviceimg" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630335984/alcove/SERVICES_1_cwicic.jpg"/>
                        <span>furnishing</span>
                    </div>
                    <div id="serimg2" className="servicecard">
                        <img  alt="serviceimg" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630335984/alcove/SERVICES_1_cwicic.jpg"/>
                        <span>furnishing</span>
                    </div>
                    <div id="serimg3" className="servicecard">
                        <img  alt="serviceimg" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630335984/alcove/SERVICES_1_cwicic.jpg"/>
                        <span>furnishing</span>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Services;