import React from "react";
import classes from './HeaderText.module.css'

const HeaderText = (props) => {
    return (
      <div className={classes.HeaderText}>
          <h2>{props.title}</h2>
          <p>{props.text}</p>
      </div>
    )
}

export default HeaderText
