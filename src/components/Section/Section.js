import React from "react";

import classes from "./Section.module.css";

const FrontPage = ({type, children}) => {



  return (
    <div className={classes[type]}>
      {children}
    </div>
  );
}

export default FrontPage;