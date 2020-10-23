import React from 'react';
import classes from './LineQuestion.module.css'
import Wrapper from "../../Layout/Wrapper/Wrapper";

const LineQuestion = props => {
    return(
        <section className={classes.LineQuestion}>
            <Wrapper styleClass = {"Wrapper Wrapper__lineQuestion"}>
                <h4>{props.title}</h4>
                <span>{props.text}</span>
                <button>{props.button}</button>
            </Wrapper>
        </section>
    )
}

export default LineQuestion