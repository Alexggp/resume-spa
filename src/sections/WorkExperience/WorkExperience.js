import React from "react";
import { useTranslation } from 'react-i18next';

import Section from "../../components/Section/Section";
import Button from "../../components/Button/Button";
import DownloadIcon from '@mui/icons-material/Download';
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
        <LogoBar/>
        <div className={classes.DonwloadContainer}>
          <h1>{t('workExperience.downloadTitle')}</h1>
          <Button 
            Icon={DownloadIcon}
            color='#fff'
            bkColor='#000'
            altColor='#000'
            altBkColor='#fff'
          >
            <a href="/CV_AlejandroGarciaGascoPerez_2024.pdf" download="Alejandro-GG-Perez-CV">{t('workExperience.downloadButton')}</a>
          </Button>
        </div>
      </div>
    </Section>
  );
}

export default WorkExperience;