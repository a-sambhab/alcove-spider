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
                <a onClick={Change} href="#home" data="HOME" className="navele leftele">
                    <NavLink className="navele leftele" to='./'>HOME</NavLink>
                </a>
                <NavLink onClick={Change} to='./aboutpage' data="ABOUT" className="navele rightele">
                    ABOUT
                </NavLink>
                <a onClick={Change} href="./" data="SERVICES" className="navele leftele">SERVICES</a>
                <a onClick={Change} href="./" data="SHOP" className="navele rightele">
                <NavLink className="navele rightele" to='./shop' > SHOP </NavLink> </a>
                <a onClick={Change} href="./" data="REVIEWS" className="navele leftele">REVIEWS</a>
                <a onClick={Change} href="./" data="CONTACT" className="navele rightele">CONTACT</a>
            </div>
            
            </div>
        </>
    );
};

export default Navbar;