import React from "react";


import { useSideScroll } from "../../hooks/useSideScroll";
import classes from './LogoBar.module.css';

import cocacolaLogo from './../../assets/images/cocacola.png';
import inditexLogo from './../../assets/images/inditex.png';
import mutuaLogo from './../../assets/images/mutua.png';
import telefonicaLogo from './../../assets/images/telefonica.png';
import gobiernoLogo from './../../assets/images/gobierno.png';
import santanderLogo from './../../assets/images/santander.png';
import iberiaLogo from './../../assets/images/iberia.png';



const LogoBar = () => {

  const scrollRef = useSideScroll();
  return (
    <div ref={scrollRef} className={classes.LogoBar}>
      <div className={classes.LogoContainer}>
        <img src={inditexLogo} style={{height: "50%", marginTop:'5%'}} alt='Inditex'></img>
      </div>
      <div className={classes.LogoContainer}>
        <img src={iberiaLogo} alt='Iberia'></img>
      </div>
      <div className={classes.LogoContainer}>
        <img src={santanderLogo} alt='Banco Santander'></img>
      </div>
      <div className={classes.LogoContainer}>
        <img src={cocacolaLogo} alt='Cocacola'></img>
      </div>
      <div className={classes.LogoContainer}>
        <img src={gobiernoLogo} alt='Gobierno de España'></img>
      </div>
      <div className={classes.LogoContainer}>
        <img src={telefonicaLogo} alt='Telefónica'></img>
      </div>
      <div className={classes.LogoContainer}>
        <img src={mutuaLogo} alt='Mutua Madrileña'></img>
      </div>

    </div>
  );
}

export default LogoBar;