import React, {useState} from 'react';
import './navbar.css'
import { NavLink } from 'react-router-dom';
const Navbar = () => {
    const [Burger, setBurger] = useState(false);
    const Change = () => {
        setBurger(!Burger);
    }
    return(
        <>
            <div onClick={Change} className = {Burger ? "open" : "menu-btn"} >
                <div className="menu-btn_burger"></div>
            </div>
            <div className="fullsecreennav">
           
            <div className = {Burger ? "navbar" : "closed"}>
                <a data="Home" className="navele leftele">
                    <NavLink className="navele leftele" to='./'>Home</NavLink>
                </a>
                <a data="About" className="navele rightele">
                    <NavLink className="navele rightele" to='./aboutpage'>About</NavLink>
                </a>
                <a data="Services" className="navele leftele">Services</a>
                <a data="Shop" className="navele rightele">
                <NavLink className="navele rightele" to='./shop' > Shop </NavLink> </a>
                <a data="Reviews" className="navele leftele">Reviews</a>
                <a data="Contact" className="navele rightele">Contact</a>
            </div>
            
            </div>
        </>
    );
};

export default Navbar;