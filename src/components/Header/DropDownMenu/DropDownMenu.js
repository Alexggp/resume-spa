import React from "react";
import { useTranslation } from 'react-i18next';


import classes from './DropDownMenu.module.css';

const DropDownMenu = ({items, closeMenu}) => {
  const { t } = useTranslation('global');
  
  const menuItems = items.map((item)=>(
    <div className={classes.MenuItem} key={item.value}>
      <a href={item.ref}>{t(item.value)}</a>
    </div>  
  ));

  return (
    <div className={classes.DropDownBackground} onClick={closeMenu}>
      <div className={classes.DropDownMenu}>
        {menuItems}
      </div>
    </div>

  )

}

export default DropDownMenu;