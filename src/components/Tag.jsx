import React from 'react';
import './Tag.css';

// Reusable component for tags/pills with optional icons
const Tag = ({ text, type = 'default', icon = null }) => {
  return (
    <span className={`tag ${type}`}>
      {icon && (
        <img 
          src={icon} 
          alt={`${text} icon`} 
          className="tag-icon"
        />
      )}
      {text}
    </span>
  );
};

export default Tag;