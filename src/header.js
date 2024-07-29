import React from 'react';
import "./App.css";

function Header({ onAboutMeClick }) {
  return (
    <div className="header_container">
      <div className="header">
        <p className="header_title">KJH's Portfolio</p>
        <div className="nav">
          <p className="nav_item" onClick={onAboutMeClick}>About Me</p>
          <p className="nav_item">Skill</p>
          <p className="nav_item">Archiving</p>
          <p className="nav_item">Project</p>
        </div>
      </div>
    </div>
  );
}

export default Header;
