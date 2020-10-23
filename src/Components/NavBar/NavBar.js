import React from "react";
import {buttons} from "./NavBarData";
import classes from './NavBar.module.css'
import {BrowserRouter, NavLink} from "react-router-dom";

const NavBar = props =>{
    const buttonsNames = buttons.map((name, index) => <li key={index} onClick={name.action}><NavLink to={`/${name.title.toLowerCase()}`} className={classes.NavBar__link}>{name.title}</NavLink></li>)

    return(

        <ul className={classes.NavBar}>
            {buttonsNames}
        </ul>

    )
}

export default NavBar

