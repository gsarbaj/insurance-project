import React from 'react';
import logo1 from '../../img/sponsor_logo1.png';
import logo2 from '../../img/sponsor_logo2.png';
import logo3 from '../../img/sponsor_logo3.png';
import logo4 from '../../img/sponsor_logo5.png';
import Wrapper from "../../Layout/Wrapper/Wrapper";
import classes from './Producers.module.css';


const Producers = props => {
    return(
        <div className={classes.Producers}>
            <Wrapper styleClass = {"Wrapper Wrapper__producers"}>
                <div className={classes.Producers__title}>{props.text}</div>
                <div><img src={logo4} alt=""/></div>
                <div><img src={logo2} alt=""/></div>
                <div><img src={logo3} alt=""/></div>
                <div><img src={logo1} alt=""/></div>
            </Wrapper>
        </div>
    )
}

export default Producers