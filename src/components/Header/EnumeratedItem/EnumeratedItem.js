import React from "react";
import { Slide, Fade } from "react-awesome-reveal";



import classes from './EnumeratedItem.module.css';
const EnumeratedItem = ({ number, decorated, color, title, subtitle, delay }) => {

  return (
    <Fade delay={delay} >
      <Slide left delay={delay} >
        <div className={classes.EnumeratedBox}>
          <div className={classes.Number}>{number}</div>
          <div className={classes.Title}>
            <b style={{ color: color }}>{decorated}</b>{', '}
            <span>{title}</span>
          </div>
          <div className={classes.Subtitle}>
            <span>{subtitle}</span>
          </div>
        </div>
      </Slide>
    </Fade>
  );
}

export default EnumeratedItem;