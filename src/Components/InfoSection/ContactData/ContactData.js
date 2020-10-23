import React from 'react';
import classes from './ContactData.module.css';

const ContactData = props => {
    return(
        <div className={classes.ContactData}>
            <h3>{props.title}</h3>
            <span>{props.text}</span>
            <ul>
                <li>{props.address}</li>
                <li>{props.phone}</li>
                <li>{props.wt}</li>
            </ul>
        </div>
    )
}

export default ContactData