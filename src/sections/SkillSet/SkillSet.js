import React from "react";
import { useTranslation } from 'react-i18next';
import { Fade } from "react-awesome-reveal";


import Section from "../../components/Section/Section";
import classes from './SkillSet.module.css';
import ImportantDevicesIcon from '@mui/icons-material/ImportantDevices';
import DataObjectIcon from '@mui/icons-material/DataObject';
import StorageIcon from '@mui/icons-material/Storage';
import FilterDramaIcon from '@mui/icons-material/FilterDrama';

const SkillSet = () => {
  const { t } = useTranslation('global');
  const iconStyle = {
    width: '100%',
    height: '100%',
    color: '#a76400'
  }

  return (
    <Section type={'Mid'}>
      <div className={classes.SkillSetContainer} id="SkillSet">
        <div className={classes.TextContainer}>
          <h1 className={classes.Title}>
            {t('skillSet.title')}
          </h1>
          <p>{t('skillSet.text')}</p>
        </div>
        <Fade>
          <div className={classes.SkillsContainer}>
            {/* Front-End */}
            <div className={classes.Skill}>
              <div className={classes.SkillIcon}>
                <ImportantDevicesIcon sx={iconStyle} />
              </div>
              <h1 className={classes.SkillTitle}>
                {t('skillSet.skills.front.title')}
              </h1>
              <p className={classes.SkillDescription}>
                {t('skillSet.skills.front.description')}
              </p>
            </div>
            {/* Back End */}
            <div className={classes.Skill}>
              <div className={classes.SkillIcon}>
                <DataObjectIcon sx={iconStyle} />
              </div>
              <h1 className={classes.SkillTitle}>
                {t('skillSet.skills.back.title')}
              </h1>
              <p className={classes.SkillDescription}>
                {t('skillSet.skills.back.description')}
              </p>
            </div>
            {/* Bases de datos  */}
            <div className={classes.Skill}>
              <div className={classes.SkillIcon}>
                <StorageIcon sx={iconStyle} />
              </div>
              <h1 className={classes.SkillTitle}>
                {t('skillSet.skills.dataBase.title')}
              </h1>
              <p className={classes.SkillDescription}>
                {t('skillSet.skills.dataBase.description')}
              </p>
            </div>
            {/* DevOps */}
            <div className={classes.Skill}>
              <div className={classes.SkillIcon}>
                <FilterDramaIcon sx={iconStyle} />
              </div>
              <h1 className={classes.SkillTitle}>
                {t('skillSet.skills.devOps.title')}
              </h1>
              <p className={classes.SkillDescription}>
                {t('skillSet.skills.devOps.description')}
              </p>
            </div>
          </div>
        </Fade>
      </div>
    </Section>
  );
}

export default SkillSet;