import './../css/header.css';
import React from 'react';

const Header = ({onAboutMeClick, onSkillsClick, onArchivingClick, onProjectClick, onActivitiesClick}) => {
  return (
    <div className="header_container">
      <div className="header">
        <p className="header_title">KJH's Portfolio</p>
        <div className="nav">
          <p className="nav_item" onClick={onAboutMeClick}>About Me</p>
          <p className="nav_item" onClick={onSkillsClick}>Skills</p>
          <p className="nav_item" onClick={onArchivingClick}>Archiving</p>
          <p className="nav_item" onClick={onProjectClick}>Project</p>
          <p className="nav_item" onClick={onActivitiesClick}>Activities</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
