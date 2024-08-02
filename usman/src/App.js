import React from 'react';

import About from './Components/About.jsx';
// import Skills from './Components/Skills.jsx';
import Projects from './Components/Projects.jsx';
import Contact from './Components/Contact.jsx';
import Home from './Components/Header.jsx';
import Header1 from './Components/Header1.jsx';
import ExperienceAndSkills from './Components/Skills.jsx';

function App() {
  return (
    <div>

      <Home />
      <Header1/>
      <About />
      <ExperienceAndSkills />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;