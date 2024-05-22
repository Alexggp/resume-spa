import React from "react";
import { useTranslation } from 'react-i18next';

import Section from "../../components/Section/Section";
import classes from './References.module.css';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';

import FotoEva from '../../assets/images/fotoEva.png'
import FotoDiego from '../../assets/images/fotoDiego.png'
import FotoMaria from '../../assets/images/fotoMaria.png'
import FotoJose from '../../assets/images/fotoJose.png'
// import FotoRuben from '../../assets/images/fotoRuben.png'


const References = () => {
  const { t } = useTranslation('global');

  return (
    <Section type={'Mid'}>
      <div className={classes.ReferencesContainer} id="References">
        <div className={classes.TextContainer}>
          <h1 className={classes.Title}>
            {t('references.title')}
          </h1>
        </div>
        <div className={classes.FeedBackContainer}>
          <div className={classes.FeedBack}>
          <a href='https://www.linkedin.com/in/jose-eduardo-winpenny-tejedor-55b04740/' target="_blank" rel="noreferrer">
            <div className={classes.FeedBackImage} style={{ backgroundImage: `url(${FotoJose})` }} />
            </a>
            <p className={classes.FeedBackQuote}>
              <FormatQuoteIcon sx={{ transform: 'rotate(180deg)' }} />
              {t('references.quotes.jose.quote')}
              <FormatQuoteIcon />
            </p>
            <div className={classes.FeedBackSignature}>
              <a href='https://www.linkedin.com/in/jose-eduardo-winpenny-tejedor-55b04740/' target="_blank" rel="noreferrer">
                <span> Jose Eduardo Winpenny </span>
              </a><br />
              {t('references.quotes.jose.signature')}
            </div>
          </div>

          <div className={classes.FeedBack}>
          <a href='https://www.linkedin.com/in/evarodriguezvidal/' target="_blank" rel="noreferrer">
            <div className={classes.FeedBackImage} style={{ backgroundImage: `url(${FotoEva})` }} />
            </a>
            <p className={classes.FeedBackQuote}>
              <FormatQuoteIcon sx={{ transform: 'rotate(180deg)' }} />
              {t('references.quotes.eva.quote')}
              <FormatQuoteIcon />
            </p>
            <div className={classes.FeedBackSignature}>
              <a href='https://www.linkedin.com/in/evarodriguezvidal/' target="_blank" rel="noreferrer">
                <span> Eva Rodríguez </span>
              </a><br />
              {t('references.quotes.eva.signature')}
            </div>
          </div>

          <div className={classes.FeedBack}>
          <a href='https://www.linkedin.com/in/diego-cerrato/' target="_blank" rel="noreferrer">
            <div className={classes.FeedBackImage} style={{ backgroundImage: `url(${FotoDiego})` }} />
            </a>
            <p className={classes.FeedBackQuote}>
              <FormatQuoteIcon sx={{ transform: 'rotate(180deg)' }} />
              {t('references.quotes.diego.quote')}
              <FormatQuoteIcon />
            </p>
            <div className={classes.FeedBackSignature}>
              <a href='https://www.linkedin.com/in/diego-cerrato/' target="_blank" rel="noreferrer">
                <span> Diego Cerrato </span>
              </a><br/>
              {t('references.quotes.diego.signature')}
            </div>
          </div>

          <div className={classes.FeedBack}>
          <a href='https://www.linkedin.com/in/mariacobos/' target="_blank" rel="noreferrer">
            <div className={classes.FeedBackImage} style={{ backgroundImage: `url(${FotoMaria})` }} />
            </a>
            <p className={classes.FeedBackQuote}>
              <FormatQuoteIcon sx={{ transform: 'rotate(180deg)' }} />
              {t('references.quotes.maria.quote')}
              <FormatQuoteIcon />
            </p>
            <div className={classes.FeedBackSignature}>
              <a href='https://www.linkedin.com/in/mariacobos/' target="_blank" rel="noreferrer">
                <span> María Cobos </span><br />
              </a>
              {t('references.quotes.maria.signature')}
            </div>
          </div>

          {/* <div className={classes.FeedBack}>
            <div className={classes.FeedBackImage} style={{ backgroundImage: `url(${FotoRuben})` }} />
            <p className={classes.FeedBackQuote}>
              <FormatQuoteIcon sx={{ transform: 'rotate(180deg)' }} />
              {t('references.quotes.ruben.quote')}
              <FormatQuoteIcon />
            </p>
            <div className={classes.FeedBackSignature}>
              <span> Rubén Galeano </span><br />
              {t('references.quotes.ruben.signature')}
            </div>
          </div> */}

        </div>
      </div>
    </Section>
  );
}

export default References;