import React, { useState } from "react";
import { useTranslation } from 'react-i18next';
import { GitHub, LinkedIn, MailOutline } from "@mui/icons-material";


import Button from "../../components/Button/Button";
import Section from "../../components/Section/Section";
import classes from './Contact.module.css';

const Contact = () => {
  const { t } = useTranslation('global');

  const [emailBody, setEmailBody] = useState('');
  const emailAdress = 'alejandro.gg.perez@gmail.com';
  const emailSubject = 'Contact from WebSite';

  const stampStyle = {
    fontSize: 100
  }

  const handlerChange = (e) => {
    setEmailBody(e.target.value);
  }

  return (
    <Section type={'Mid'}>
      <div className={classes.ContactContainer} id="Contact">
        <div className={classes.Triangle}></div>
        <div className={classes.Envelope}>
          <div className={classes.References}>
            <div className={classes.Stamps}>
              <a href="https://github.com/Alexggp" target='_blank' rel="noreferrer">
                <GitHub sx={stampStyle} />
              </a>
              <a href="https://www.linkedin.com/in/alejandro-garc%C3%ADa-gasco-p%C3%A9rez-919265132/" target='_blank' rel="noreferrer">
                <LinkedIn sx={stampStyle} />
              </a>
            </div>
            <div className={classes.Adress}>
              <p>Alejandro García-Gasco Pérez</p>
              <p>
                <a href={`mailto:${emailAdress}?subject=${emailSubject}`}>
                  alejandro.gg.perez@gmail.com
                </a>
              </p>
              <p>626581246</p>
            </div>
          </div>
          <div className={classes.Form}>
            <h1>{t('contact.title')}</h1>
            <textarea onChange={handlerChange}></textarea>
            <a href={`mailto:${emailAdress}?subject=${emailSubject}&body=${emailBody}`}>
              <Button
                Icon={MailOutline}
                color='#fff'
                bkColor='#000'
                altColor='#fff'
                altBkColor='#000'
              >
                {t('contact.button')}
              </Button>
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;