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
            <a href="https://elewa.ke/">
                 <img className="logo" src={logo} alt={logoAlt}/>
            </a>
            <div className="nav-links">
                <a href="https://elewa.ke/" >{home}</a>
                <a href="https://elewa.ke/" >{aboutUs}</a>
                <a href="https://elewa.ke/" >{socialImpact}</a>
                <a href="https://elewa.ke/" >{invest}</a>
                <a href="https://elewa.ke/" >{ventureLabs}</a>
                <a href="https://elewa.ke/" >{brand}</a>
                <a href="https://elewa.ke/" >{careers}</a>
                <a href="https://elewa.ke/" >{contact}</a>
            </div>
        </div>
    )
}

export default Nav;