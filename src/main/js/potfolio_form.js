import './../css/potfolio_form.css';
import React, { useRef } from 'react';
import Header from "./header";
import Aboutme from "./aboutme";
import Skill from './skill';
import Archiving from './archiving';
import Project from './project';
import Activities from './activities';

const Potfolio_form = () => {
  const aboutMeRef = useRef(null);
  const skillsRef = useRef(null);
  const archivingRef = useRef(null);
  const projectRef = useRef(null);
  const activitiesRef = useRef(null);

  const handleScrollTo = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: 'smooth' });
    }
  };
  
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      <Header 
        onAboutMeClick={() => handleScrollTo(aboutMeRef)}
        onSkillsClick={() => handleScrollTo(skillsRef)}
        onArchivingClick={() => handleScrollTo(archivingRef)}
        onProjectClick={() => handleScrollTo(projectRef)}
        onActivitiesClick={() => handleScrollTo(activitiesRef)} 
      />
      <div className="header_container">
        <div style={{ backgroundColor: 'black', width: '1280px', height: '935px' }}></div>
      </div>
      <Aboutme ref={aboutMeRef} />
      <Skill ref={skillsRef} />
      <Archiving ref={archivingRef} />    
      <Project ref={projectRef} />  
      <Activities ref={activitiesRef} />
      <button onClick={handleScrollToTop} className="scroll-to-top">Top</button>
    </>
  );
}

export default Potfolio_form;
