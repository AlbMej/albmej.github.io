// import React from 'react';
import { FaLinkedin } from "react-icons/fa"; 

const LinkedInIcon = () => {
  return <FaLinkedin size={16} className="linkedin-icon" />;
};

// Component for the top section of the profile
const ProfileHeader = ({ user }) => (
  <div className="profile-header">
    <div className="avatar-container">
      <img src="https://albertomejia.com/pictures/Twitter_prof_pic.jpg" alt={user.name} className="avatar" />
      <span className="avatar-badge">Alberto V2.0</span>
    </div>
    <div className="profile-info">
      <div className="profile-name">
        <h1>{user.name}</h1>
        <a href={user.linkedinUrl} target="_blank" rel="noopener noreferrer">
          <LinkedInIcon />
        </a>
      </div>
      <p className="profile-title">{user.title}</p>
    </div>
    <button className="edit-profile-btn">Change Me</button>
  </div>
);


export default ProfileHeader;