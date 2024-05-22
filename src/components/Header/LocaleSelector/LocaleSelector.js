import React from "react";
import { useTranslation } from 'react-i18next';

import classes from './LocaleSelector.module.css';

const LocaleSelector = ({ chLang }) => {
  const { i18n } = useTranslation('global');
  const handleClick = (locale) => {
    if (locale !== i18n.language){
      chLang(locale);
    }
  }



  return (
    <div className={classes.LocaleSelector} >
      <div className={i18n.language === 'es' ? classes.LocaleItemSelected : classes.LocaleItem} onClick={()=>handleClick('es')}>ES</div>
      <div className={i18n.language === 'en' ? classes.LocaleItemSelected : classes.LocaleItem} onClick={()=>handleClick('en')}>EN</div>
    </div>
  )
}

export default LocaleSelector;