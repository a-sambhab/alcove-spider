import React from 'react';
import './Contact.css'

const Contact = () => {
    return(
        <>
            <div className="contact-section">
                <div className="left-section-contact">
                    <div className="text-left-section-contact">
                        <div className="heading-text-left-section-contact">
                            <h1>Want to</h1>
                            <h1>Contact?</h1>
                        </div>
                        <div className="subheading-text-left-section-contact">
                            <h1>LET'S TALK</h1>
                        </div>
                    </div>
                </div>

                <div className="right-section-contact">
                    <div className="boxes-right-section-contact">
                        {/* <div className="box1-right-section-contact"> */}

                            <div className="text-box1">
                                <div className="heading-text-box1"><h1>ALCOVE</h1></div>
                                <div className="subheading-text-box1"><h2>We Help You Make Modern Interior.</h2></div>
                            </div>

                            <div className="text-box2">
                                <div className="email-text-box2">
                                <div className="heading-text-box2"><h1>E-MAIL :</h1></div>
                                <div className="subheading-text-box2"><h2>alcoveinterior@gmail.com</h2></div>
                                </div>
                                <div className="call-text-box2">
                                <div className="heading-text-box2"><h1>CALL :</h1></div>
                                <div className="subheading-text-box2"><h2>6200-211-212</h2></div>
                                </div>
                            </div>

                            <div className="text-box3">
                                <div className="heading-text-box3"><h1>ADDRESS</h1></div>
                                <div className="subheading-text-box3"><h2>Chandni Chowk, New Delhi, 800001</h2></div>
                            </div>

                        {/* </div> */}
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Contact;