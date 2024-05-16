import React from 'react';
import ProgressBar from "react-scroll-progress-bar";

import './App.css';
import FrontPage from './sections/FrontPage/FrontPage';
import WorkExperience from './sections/WorkExperience/WorkExperience';
import Phylosophy from './sections/Phylosophy/Phylosophy';
import SkillSet from './sections/SkillSet/SkillSet';

const App = () => {
  return (
    <div className="App">
      <ProgressBar bgcolor="#5221e6" />
      <FrontPage />
      <WorkExperience />
      <Phylosophy />
      <SkillSet/>
    </div>
  );
}

export default App;
