import React, { useEffect, useState } from 'react';
import './../css/skillbar.css';

const SkillBar = ({ skill, level }) => {
  const [displayLevel, setDisplayLevel] = useState(0);

  useEffect(() => {
    let timeout;
    if (displayLevel < level) {
      timeout = setTimeout(() => setDisplayLevel(displayLevel + 1), 10);
    }
    return () => clearTimeout(timeout);
  }, [displayLevel, level]);

  return (
    <div className="skill-bar">
      <div className="skill-name">{skill}</div>
      <div className="skill-level-bar">
        <div
          className="skill-level"
          style={{ width: `${displayLevel}%` }}
        >
          {displayLevel} %
        </div>
      </div>
    </div>
  );
};

export default SkillBar;
