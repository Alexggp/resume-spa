import React, { useState } from "react";



import classes from './Button.module.css';


const Button = ({ Icon, color, bkColor, altColor, altBkColor, children }) => {

  const [isHover, setIsHover] = useState(false);
  const toggleHover = () => {
    setIsHover(!isHover)
  }


  const mainStyle = {
    color: color,
    backgroundColor: bkColor,
    borderColor: color
  }
  const hoverStyle = {
    backgroundColor: altBkColor,
    color: altColor
  }
  const style = isHover ? hoverStyle : mainStyle;

  return (
    <button style={style} onMouseEnter={toggleHover} onMouseLeave={toggleHover} className={classes.CustomButton}>
      <div><Icon sx={{style,...{fontSize:30}}}/></div>
      <span>{children}</span>
    </button>
  );
}

export default Button;