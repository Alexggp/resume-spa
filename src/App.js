import React from 'react';
import ProgressBar from "react-scroll-progress-bar";

import './App.css';
import FrontPage from './sections/FrontPage/FrontPage';
import CallToAction from './sections/CallToAction/CallToAction';
import WorkExperience from './sections/WorkExperience/WorkExperience';
import Phylosophy from './sections/Phylosophy/Phylosophy';
import SkillSet from './sections/SkillSet/SkillSet';
import Leadership from './sections/Leadership/Leadership';
import References from './sections/References/References';

const App = () => {
  return (
    <div className="App">
      <ProgressBar bgcolor="#a76400" />
      <FrontPage />
      <CallToAction/>
      <WorkExperience />
      <Phylosophy />
      <SkillSet/>
      <Leadership/>
      <References/>
    </div>
  );
}

export default App;
