import React from "react";
import {NavLink} from "react-router-dom";


const Logo = props =>{
    return(
        <NavLink to="/#">
            <img src={props.logo} alt={props.alt} width={props.width} height={props.height}/>
        </NavLink>
    )
}

export default Logo