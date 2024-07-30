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

  const handleAboutMeClick = () => {
    if (aboutMeRef.current) {
      aboutMeRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Header onAboutMeClick={handleAboutMeClick} />
      <div className="header_container">
        <div style={{ backgroundColor: 'black', width: '1280px', height: '935px' }}></div>
      </div>
      <Aboutme ref={aboutMeRef} />
      <Skill></Skill>
      <Archiving></Archiving>    
      <Project></Project>  
      <Activities></Activities>
    </>
  );
}

export default Potfolio_form;
