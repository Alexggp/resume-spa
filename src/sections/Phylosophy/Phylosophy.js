import React from "react";
import { useTranslation } from 'react-i18next';

import Section from "../../components/Section/Section";
import classes from './Phylosophy.module.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Phylosophy = () => {
  const { t } = useTranslation('global');

  return (
    <Section type={'Mid'}>
      <div className={classes.PhylosophyContainer} id="Phylosophy">
        <div className={classes.TextContainer}>
          <h1 className={classes.Title}>
            {t('philosophy.title')}
          </h1>
          <h2>
            <FormatQuoteIcon sx={{ transform: 'rotate(180deg)' }} />
            {t('philosophy.text')}
            <FormatQuoteIcon />
          </h2>
          <h2>
            <FormatQuoteIcon sx={{ transform: 'rotate(180deg)' }} />
            {t('philosophy.subtext')}
            <FormatQuoteIcon />
          </h2>
        </div>
        <div className={classes.Image}></div>
      </div>
    </Section>
  );
}

export default Phylosophy;