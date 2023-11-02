// This is a feature that is reused in all pages and therefore, in reference to the MVVM architecture, this acts as the model where the data is declared into variables.
import React from 'react';
import '/home/steve/Italanta/Elewa-Test/client/src/styles/Nav.css'  //this links the component and the css file
import logo from '/home/steve/Italanta/Elewa-Test/client/src/resources/logo/Logo_White_arvoyx.svg'; //This is the path to the logo image being assigned a variable.

function Nav() {

    // these are the values that are to be rendered on the view model
    const logoAlt = "logo"
    const home = "Home";
    const aboutUs = "About Us";
    const socialImpact = "Social Impact";
    const invest = "Invest";
    const ventureLabs = "Venture Labs";
    const brand = "Brand";
    const careers = "Careers";
    const contact = "Contact";


    return(
        <div className="nav-body">
            <img className="logo" src={logo} alt={logoAlt}/>
            <ul className="nav-links">
                <li>{home}</li>
                <li>{aboutUs}</li>
                <li>{socialImpact}</li>
                <li>{invest}</li>
                <li>{ventureLabs}</li>
                <li>{brand}</li>
                <li>{careers}</li>
                <li>{contact}</li>
            </ul>
        </div>
    )
}

export default Nav;