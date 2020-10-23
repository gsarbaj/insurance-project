import React from 'react';
import classes from './PersolalCaruselData.module.css'

const PersolalCaruselData = props => {
    return(
        <div className={classes.PersonalData}>
            <img src={props.src} alt=""/>
            <h3>{props.name}</h3>
            <span>{props.jobTitle}</span>
        </div>
    )
}

export default PersolalCaruselData