import React from "react";
import { useTranslation } from 'react-i18next';
import classes from './Header.module.css';

const Header = () =>{
  const { t } = useTranslation('global');

  return (
    <div className={classes.Header}>
      <div className={classes.Title}>
        <a href="/">{t('header.title')}</a>
      </div>
      <nav className={classes.AnchorMenu}>
        <a href="/" className={classes.AnchorItem}>{t('sections.experience')}</a>
        <a href="/" className={classes.AnchorItem}>{t('sections.about')}</a>
        <a href="/" className={classes.AnchorItem}>{t('sections.works')}</a>
        <a href="/" className={classes.AnchorItem}>{t('sections.contact')}</a>
      </nav>
    </div>
  )

}

export default Header;