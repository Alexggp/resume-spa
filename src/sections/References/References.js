import React from "react";
import { useTranslation } from 'react-i18next';

import Section from "../../components/Section/Section";
import classes from './References.module.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

const References = () => {
  const { t } = useTranslation('global');

  return (
    <Section type={'Mid'}>
      <div className={classes.ReferencesContainer} id="References">
        <div className={classes.TextContainer}>
          <h1 className={classes.Title}>
            {t('references.title')}
          </h1>
          <p>{t('references.subtitle')}</p>
        </div>
        <div className={classes.FeedBackContainer}>

          <div className={classes.FeedBack}>
            <div className={classes.FeedBackImage}></div>
            <p className={classes.FeedBackQuote}>
              <FormatQuoteIcon sx={{transform: 'rotate(180deg)'}}/>
                {t('references.quotes.jose.quote')}
              <FormatQuoteIcon />
            </p>
            <div className={classes.FeedBackSignature}>
              <span> Jose Eduardo Winpenny </span><br/>
              {t('references.quotes.jose.signature')}
            </div>
          </div>

          <div className={classes.FeedBack}>
            <div className={classes.FeedBackImage}></div>
            <p className={classes.FeedBackQuote}>
              <FormatQuoteIcon sx={{transform: 'rotate(180deg)'}}/>
                {t('references.quotes.jose.quote')}
              <FormatQuoteIcon />
            </p>
            <div className={classes.FeedBackSignature}>
              <span> Jose Eduardo Winpenny </span><br/>
              {t('references.quotes.jose.signature')}
            </div>
          </div>

          <div className={classes.FeedBack}>
            <div className={classes.FeedBackImage}></div>
            <p className={classes.FeedBackQuote}>
              <FormatQuoteIcon sx={{transform: 'rotate(180deg)'}}/>
                {t('references.quotes.jose.quote')}
              <FormatQuoteIcon />
            </p>
            <div className={classes.FeedBackSignature}>
              <span> Jose Eduardo Winpenny </span><br/>
              {t('references.quotes.jose.signature')}
            </div>
          </div>

          <div className={classes.FeedBack}>
            <div className={classes.FeedBackImage}></div>
            <p className={classes.FeedBackQuote}>
              <FormatQuoteIcon sx={{transform: 'rotate(180deg)'}}/>
                {t('references.quotes.jose.quote')}
              <FormatQuoteIcon />
            </p>
            <div className={classes.FeedBackSignature}>
              <span> Jose Eduardo Winpenny </span><br/>
              {t('references.quotes.jose.signature')}
            </div>
          </div>

          <div className={classes.FeedBack}>
            <div className={classes.FeedBackImage}></div>
            <p className={classes.FeedBackQuote}>
              <FormatQuoteIcon sx={{transform: 'rotate(180deg)'}}/>
                {t('references.quotes.jose.quote')}
              <FormatQuoteIcon />
            </p>
            <div className={classes.FeedBackSignature}>
              <span> Jose Eduardo Winpenny </span><br/>
              {t('references.quotes.jose.signature')}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}

export default References;