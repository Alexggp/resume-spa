import React from "react";
import { useTranslation } from 'react-i18next';

import Section from "../../components/Section/Section";
import classes from './Leadership.module.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const Leadership = () => {
  const { t } = useTranslation('global');

  return (
    <Section type={'Mid'}>
      <div className={classes.LeadershipContainer} id="Leadership">
        <div className={classes.Image}></div>
        <div className={classes.TextContainer}>
          <h1 className={classes.Title}>
            {t('leadership.title')}
          </h1>
          <h2>
            <FormatQuoteIcon sx={{transform: 'rotate(180deg)'}}/>
              {t('leadership.text')}
            <FormatQuoteIcon />
          </h2>
          <h2>
            <FormatQuoteIcon sx={{transform: 'rotate(180deg)'}}/>
              {t('leadership.subtext')}
            <FormatQuoteIcon />
          </h2>
        </div>

      </div>
    </Section>
  );
}

export default Leadership;