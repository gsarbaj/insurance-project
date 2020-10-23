import React from 'react';
import classes from './InfoSectionData.module.css'
import {BrowserRouter} from "react-router-dom";
import {NavLink} from "react-router-dom";

const InfoSectionData = props => {
    return(
        <div className={classes.InfoSectionData}>
            <h3>{props.title}</h3>

            <ul>
                {props.links.map((link, index) =>
                    <li key={index}>
                        <BrowserRouter>
                            <NavLink  to={`/${link.slice(0, link.indexOf(' ')).toLowerCase()}`}>{link}</NavLink>
                        </BrowserRouter>
                    </li> )}
            </ul>
        </div>
    )
}

export default InfoSectionData

