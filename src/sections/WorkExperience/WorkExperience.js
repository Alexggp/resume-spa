import React from "react";
import { useTranslation } from 'react-i18next';

import Section from "../../components/Section/Section";
import EnumeratedItem from "../../components/Header/EnumeratedItem/EnumeratedItem";
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
          <span>{t('workExperience.subtitle')}</span>
          <h1>{t('workExperience.title')}</h1>
        </div>
        <div className={classes.EnumeratedContainer}>
          <EnumeratedItem
            number='01'
            decorated={t('workExperience.companies.hi.company')}
            color='darkgreen'
            title={t('workExperience.companies.hi.jobTitle')}
            subtitle={t('workExperience.companies.hi.jobDescription')}
            delay={500}
          />
          <EnumeratedItem
            number='02'
            decorated={t('workExperience.companies.ntt.company')}
            color='darkblue'
            title={t('workExperience.companies.ntt.jobTitle')}
            subtitle={t('workExperience.companies.ntt.jobDescription')}
            delay={1000}
          />
          <EnumeratedItem
            number='03'
            decorated={t('workExperience.companies.interaction.company')}
            color='darkorange'
            title={t('workExperience.companies.interaction.jobTitle')}
            subtitle={t('workExperience.companies.interaction.jobDescription')}
            delay={1500}
          />
        </div>
        <div className={classes.DonwloadContainer}>
          <h1>{t('workExperience.downloadTitle')}</h1>
          <Button 
            Icon={DownloadIcon}
            color='#000'
            bkColor='#fff'
            altColor='#fff'
            altBkColor='#bababd'
          >
            <a href="/CV_AlejandroGarciaGascoPerez_2024.pdf" download="Alejandro-GG-Perez-CV">{t('workExperience.downloadButton')}</a>
          </Button>
        </div>
        <div className={classes.LogoBarContainer}>
          <LogoBar/>
        </div>
      </div>
    </Section>
  );
}

export default WorkExperience;