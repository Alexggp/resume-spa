import React from "react";
import { useTranslation } from 'react-i18next';

import Header from "../../components/Header/Header";
import Section from "../../components/Section/Section";

import classes from './FrontPage.module.css';

const FrontPage = () => {
  const { t } = useTranslation('global');

  return (
    <Section type={'Main'}>
      <Header></Header>
      <div className={classes.FrontPageContainer}>
        <div className={classes.DiagonalBk}></div>
        <div role='img' className={classes.PortraitContainer} />
        <div className={classes.TextContainer}>
          <h1 className={classes.Title}>
            <span>{t('frontPage.title1')}</span><br />
            <span className={classes.TitleAlt}>{t('frontPage.title2')}</span>
          </h1>
        </div>
      </div>

    </Section>
  );
}

export default FrontPage;