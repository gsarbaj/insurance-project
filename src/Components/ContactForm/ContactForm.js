import React from 'react';
import Wrapper from "../../Layout/Wrapper/Wrapper";
import classes from './ContactForm.module.css';
import {BrowserRouter} from "react-router-dom";

const ContactForm = props => {
    return(
        <section className={classes.Contacts__section}>
            <Wrapper styleClass={'Wrapper'}>

                <h3 className={classes.Contacts__title}>{props.title}</h3>
                <div className={classes.ContactForm}>

                   <div className={classes.ContactForm__card}>
                       <div className={classes.ContactForm__icon}>
                           <i className="fas fa-phone-alt"></i>
                       </div>
                       <BrowserRouter>
                           <span className={classes.ContactForm__text}>{props.text}</span>
                           <a href={'tel:'+props.tel}>

                               {props.tel}
                           </a>
                       </BrowserRouter>
                   </div>
                   <div className={classes.ContactForm__round}>{props.or}</div>

                   <div className={classes.ContactForm__card}>
                       <span className={classes.ContactForm__sign}>{props.inputText}</span>
                       <input type="text"/>
                   </div>

                </div>

            </Wrapper>
        </section>
    )
}

export default ContactForm