import React from "react";
import classes from './Links.module.css'
import {NavLink} from "react-router-dom";

const Links = props =>{
    return(


                <li className={classes.Link__item}>
                    <NavLink to={props.link}>
                        {props.text}
                    </NavLink>
                </li>






    )
}

export default Links