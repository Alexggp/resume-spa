import React from "react";
import { useTranslation } from 'react-i18next';

import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import classes from './WorkExperience.module.css';
import LogoBar from "../../components/LogoBar/LogoBar";

const WorkExperience = () => {
  const { t } = useTranslation('global');

  return (
    <Section type={'Mid'}>
      <div className={classes.WorkExperienceContainer} id="WorkExperience">
        <div className={classes.Title}>
          <span>{t('workExperience.title')}</span>
        </div>
        <LogoBar />
        <div className={classes.DonwloadContainer}>
          <h1>{t('workExperience.downloadTitle')}</h1>
          <a href="/#Contact">
            <Button
              Icon={CalendarMonthIcon}
              color='#fff'
              bkColor='#000'
              altColor='#000'
              altBkColor='#fff'
            >
              {t('workExperience.downloadButton')}
            </Button>
          </a>
        </div>
      </div>
    </Section>
  );
}

export default WorkExperience;