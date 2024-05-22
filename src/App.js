import React from 'react';
import ProgressBar from "react-scroll-progress-bar";
import { useTranslation } from 'react-i18next';

import './App.css';
import FrontPage from './sections/FrontPage/FrontPage';
import CallToAction from './sections/CallToAction/CallToAction';
import WorkExperience from './sections/WorkExperience/WorkExperience';
import Phylosophy from './sections/Phylosophy/Phylosophy';
import SkillSet from './sections/SkillSet/SkillSet';
import Leadership from './sections/Leadership/Leadership';
import References from './sections/References/References';
import Contact from './sections/Contact/Contact';

const App = () => {

  const { i18n } = useTranslation();
  
  const changeLanguage = (locale) =>{
    i18n.changeLanguage(locale);
  }

  return (
    <div className="App">
      <ProgressBar bgcolor="#a76400" />
      <FrontPage chLang={changeLanguage}/>
      <CallToAction/>
      <WorkExperience />
      <Phylosophy />
      <SkillSet/>
      <Leadership/>
      <References/>
      <Contact/>
    </div>
  );
}

export default App;
