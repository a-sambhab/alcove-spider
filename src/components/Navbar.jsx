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
                <a href="./" data="HOME" className="navele leftele">
                    <NavLink className="navele leftele" to='./'>HOME</NavLink>
                </a>
                <a href="./" data="ABOUT" className="navele rightele">
                    <NavLink className="navele rightele" to='./aboutpage'>ABOUT</NavLink>
                </a>
                <a href="./" data="SERVICES" className="navele leftele">SERVICES</a>
                <a href="./" data="SHOP" className="navele rightele">
                <NavLink className="navele rightele" to='./shop' > SHOP </NavLink> </a>
                <a href="./" data="REVIEWS" className="navele leftele">REVIEWS</a>
                <a href="./" data="CONTACT" className="navele rightele">CONTACT</a>
            </div>
            
            </div>
        </>
    );
};

export default Navbar;