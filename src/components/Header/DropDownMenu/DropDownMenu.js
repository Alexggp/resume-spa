import React from "react";
import { useTranslation } from 'react-i18next';
import LocaleSelector from "../LocaleSelector/LocaleSelector";


import classes from './DropDownMenu.module.css';

const DropDownMenu = ({items, closeMenu, chLang}) => {
  const { t } = useTranslation('global');
  
  const menuItems = items.map((item)=>(
    <a href={item.ref}>
    <div className={classes.MenuItem} key={item.value}>
      {t(item.value)}
    </div>  
    </a>
  ));

  return (
    <div className={classes.DropDownBackground} onClick={closeMenu}>
      <div className={classes.DropDownMenu}>
        {menuItems}
        <div className={classes.MenuItem}>
            <LocaleSelector chLang={chLang}/>
        </div>  
        
      </div>
    </div>

  )

}

export default DropDownMenu;