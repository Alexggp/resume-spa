import React, {useState} from "react";
import { useTranslation } from 'react-i18next';
import { useMediaQuery } from 'react-responsive'
import MenuIcon from '@mui/icons-material/Menu';

import classes from './Header.module.css';
import DropDownMenu from "./DropDownMenu/DropDownMenu";
import NavBar from "./NavBar/NavBar";

const Header = ({chLang}) => {
  const { t } = useTranslation('global');
  const isTabletOrMobile = useMediaQuery({ query: '(max-width: 1024px)' })
  const [menuIsOpen, setMenuIsOpen] = useState(false);


  const menuItems = [
     {
      value: 'menu.experience',
      ref: '/#WorkExperience'
     },
     {
      value: 'menu.skillSet',
      ref: '/#SkillSet'
     },
     {
      value: 'menu.references',
      ref: '/#References'
     },
     {
      value: 'menu.contact',
      ref: '/#Contact'
     }
  ]
  
  const navBar = isTabletOrMobile ? '' : (
    <NavBar chLang={chLang} items={menuItems}/>
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
    <DropDownMenu chLang={chLang} items={menuItems} closeMenu={()=>setMenuIsOpen(false)}/>
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