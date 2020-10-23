import React from 'react';
import Logo from "../../Components/Logo/Logo";
import LogoInsurance from "../../img/footer_logo.png";
import classes from './Footer.module.css';
import Wrapper from "../Wrapper/Wrapper";

const Footer = props => {
    return(
        <footer className={classes.Footer}>
            <Wrapper styleClass = {"Wrapper Wrapper__footer"}>
                <div className={classes.Footer__copyright}><span>© 2020, Forturance.
    All Rights Reserved by Instive LLC</span></div>
                <div><Logo logo={LogoInsurance} alt={''} width={'190'} height={'50'}/></div>
            </Wrapper>
        </footer>
    )
}

export default Footer