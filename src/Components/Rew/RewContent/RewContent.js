import React from 'react';
import classes from './RewContent.module.css'

const RewContent = props => {
    return(
        <div className={classes.RewContent}>
            <div className={classes.RewContent__text}>{props.text}</div>
            <div className={classes.pic}></div>
            <h3>{props.name}</h3>
            <span>{props.jobTitle}</span>
        </div>

    )
}

export default RewContent