import React, {useState} from "react";
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive'
import MenuIcon from '@mui/icons-material/Menu';

import classes from './Header.module.css';
import DropDownMenu from "./DropDownMenu/DropDownMenu";

const Header = () => {
  const { t } = useTranslation('global');
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1224px)' })
  const [menuIsOpen, setMenuIsOpen] = useState(false);


  const menuItems = [
     {
      value: 'menu.experience',
      ref: '/'
     },
     {
      value: 'menu.about',
      ref: '/'
     },
     {
      value: 'menu.works',
      ref: '/'
     },
     {
      value: 'menu.contact',
      ref: '/'
     }
  ]
  
  const navBar = isTabletOrMobile ? '' : (
    <nav className={classes.AnchorMenu}>
      <a href="/" className={classes.AnchorItem}>{t('menu.experience')}</a>
      <a href="/" className={classes.AnchorItem}>{t('menu.about')}</a>
      <a href="/" className={classes.AnchorItem}>{t('menu.works')}</a>
      <a href="/" className={classes.AnchorItem}>{t('menu.contact')}</a>
    </nav>
  )

  const dropDownIconStyle = { 
    color: 'white',
    fontSize: 40,
    cursor: 'pointer'
  }
  const dropDownIcon = isTabletOrMobile ? (
    <div className={classes.dropDownIconContainer} onClick={()=>setMenuIsOpen(!menuIsOpen)}>
      <MenuIcon sx={dropDownIconStyle}></MenuIcon>
    </div>
    
  ) : '';

  const dropDwnMenu = (isTabletOrMobile & menuIsOpen) ? (
    <DropDownMenu items={menuItems} closeMenu={()=>setMenuIsOpen(false)}/>
  ) : '';

  return (
    <>
      {dropDwnMenu}
      <div className={classes.Header}>
        <div className={classes.Title}>
          <a href="/">{t('header.title')}</a>
        </div>
        {navBar}
        {dropDownIcon}
        
      </div>
    </>

  )

}

export default Header;