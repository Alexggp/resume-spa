import React from "react";
import { useTranslation } from 'react-i18next';
import MailOutlineIcon from '@mui/icons-material/MailOutline';

import Section from "../../components/Section/Section";
import classes from './CallToAction.module.css';
import Button from "../../components/Button/Button";

const CallToAction = () => {
  const { t } = useTranslation('global');

  return (
    <Section type={'Mid'}>
      <div className={classes.CallToActionContainer} id="CallToAction">
        <p>{t('calltoaction.text')}</p>
        <h1 className={classes.Title}>
          {t('calltoaction.title')}
        </h1>
        <Button
          Icon={MailOutlineIcon}
          color='#000'
          bkColor='#fff'
          altColor='#fff'
          altBkColor='#000'
        >
          <a href="/#Contact">{t('calltoaction.button')}</a>
        </Button>
      </div>
    </Section>
  );
}

export default CallToAction;