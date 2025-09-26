import React from 'react';
import './Tag.css';

// Reusable component for tags/pills
const Tag = ({ text, type = 'default' }) => (
  <span className={`tag ${type}`}>{text}</span>
);

export default Tag;