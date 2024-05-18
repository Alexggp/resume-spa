import React from "react";
import { useTranslation } from 'react-i18next';

import Section from "../../components/Section/Section";
import classes from './References.module.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import FotoEva from '../../assets/images/fotoEva.png'
import FotoDiego from '../../assets/images/fotoDiego.png'
import FotoMadre from '../../assets/images/fotoMadre.png'
import FotoJose from '../../assets/images/fotoJose.png'
import FotoRuben from '../../assets/images/fotoRuben.png'


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
            <div className={classes.FeedBackImage}  style={{backgroundImage: `url(${FotoJose})`}}/>
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
            <div className={classes.FeedBackImage} style={{backgroundImage: `url(${FotoEva})`}}/>
            <p className={classes.FeedBackQuote}>
              <FormatQuoteIcon sx={{transform: 'rotate(180deg)'}}/>
                {t('references.quotes.eva.quote')}
              <FormatQuoteIcon />
            </p>
            <div className={classes.FeedBackSignature}>
              <span> Eva Rodríguez </span><br/>
              {t('references.quotes.eva.signature')}
            </div>
          </div>

          <div className={classes.FeedBack}>
            <div className={classes.FeedBackImage} style={{backgroundImage: `url(${FotoDiego})`}}/>
            <p className={classes.FeedBackQuote}>
              <FormatQuoteIcon sx={{transform: 'rotate(180deg)'}}/>
                {t('references.quotes.diego.quote')}
              <FormatQuoteIcon />
            </p>
            <div className={classes.FeedBackSignature}>
              <span> Diego Cerrato </span><br/>
              {t('references.quotes.diego.signature')}
            </div>
          </div>

          <div className={classes.FeedBack}>
            <div className={classes.FeedBackImage} style={{backgroundImage: `url(${FotoMadre})`}}/>
            <p className={classes.FeedBackQuote}>
              <FormatQuoteIcon sx={{transform: 'rotate(180deg)'}}/>
                {t('references.quotes.madre.quote')}
              <FormatQuoteIcon />
            </p>
            <div className={classes.FeedBackSignature}>
              <span> Eva Pérez </span><br/>
              {t('references.quotes.madre.signature')}
            </div>
          </div>

          <div className={classes.FeedBack}>
            <div className={classes.FeedBackImage} style={{backgroundImage: `url(${FotoRuben})`}}/>
            <p className={classes.FeedBackQuote}>
              <FormatQuoteIcon sx={{transform: 'rotate(180deg)'}}/>
                {t('references.quotes.ruben.quote')}
              <FormatQuoteIcon />
            </p>
            <div className={classes.FeedBackSignature}>
              <span> Rubén Galeano </span><br/>
              {t('references.quotes.ruben.signature')}
            </div>
          </div>

        </div>
      </div>
    </Section>
  );
}

export default References;