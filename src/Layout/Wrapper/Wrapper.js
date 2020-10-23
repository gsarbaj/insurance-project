import React from "react";
import  './Wrapper.css';

const Wrapper = props =>{
    return(

        <div className={props.styleClass}>
            {props.children}
        </div>



    )
}

export default Wrapper