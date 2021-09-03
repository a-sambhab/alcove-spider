import React, {useState, useEffect} from 'react';
import Typist from 'react-typist';
import { NavLink } from 'react-router-dom';
import './about.css'
const About = () => {
    const scrolltop = () => {
        window.scrollTo(0,0);
    }
    const [count, setCount] = useState(1);

  useEffect(() => {
    // document.title = `You clicked ${count} times`;
    console.log("Count: " + count);
    setCount(1);
  }, [count]);

    return(
        <>
            <div id="about" className="aboutsection">
                <div className="aboutleft">
                    <img id="about1" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630332269/alcove/about1_htpuww.jpg" alt="about1"/>
                    <img id="about2" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630332208/alcove/about2_ele7lt.jpg" alt="about2"/>
                    <img id="about3" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630332204/alcove/about_3_fp1ptq.jpg" alt="about3"/>
                    <img id="about4" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630332203/alcove/about_4_eifo6q.jpg" alt="about4"/>
                    <div className="aboutdesign"></div>
                </div>
                    <div className="svg-aboutsection-topleftdiv"><img classname="svg-aboutsection-topleft" src="https://res.cloudinary.com/dzbdnlr0f/image/upload/v1630684569/alcove/orange_top_left_z7kpbg.svg" alt=""/></div>
                <div className="aboutright">
                    <div className="heading-landing about-head"><h1>dreaming since 2021 </h1></div>
                    <div className="underline"></div>
                    <div className="aboutcon">
                    {count ? (
                        <Typist avgTypingDelay={50} onTypingDone={() => setCount(0)}>
                            <span>we build dreams</span>
                            <Typist.Backspace count={20} delay={800} />
                            <span>we build homes</span>
                            <Typist.Backspace count={20} delay={800} />
                        </Typist>
                    ) : (
                    ""
                    )}
                    </div>
                    <button className="knowmore"> <NavLink style={{textDecoration: "none", color: "#32564C"}} to='./aboutpage' onClick={scrolltop}> Know More </NavLink></button>
                </div>
            
            
            </div>
        </>
    );
}

export default About;