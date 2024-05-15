import React from 'react';

import './App.css';
import FrontPage from './sections/FrontPage/FrontPage';
import WorkExperience from './sections/WorkExperience/WorkExperience';

const App = () => {
  return (
    <div className="App">
      <FrontPage/>
      <WorkExperience/>
    </div>
  );
}

export default App;
