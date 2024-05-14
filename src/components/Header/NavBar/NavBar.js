import React from "react";
import { useTranslation } from 'react-i18next';


import classes from './NavBar.module.css';

const NavBar = ({items}) => {
  const { t } = useTranslation('global');
  
  const menuItems = items.map((item)=>(
    <div className={classes.NavBarItem} key={item.value}>
      <a href={item.ref} className={classes.AnchorItem}>{t(item.value)}</a>
    </div>  
  ));

  return (
    <nav className={classes.AnchorMenu}>
      {menuItems}
    </nav>
  )

}

export default NavBar;