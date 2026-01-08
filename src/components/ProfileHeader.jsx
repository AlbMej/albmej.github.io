import React, { useState } from 'react';
import { FaLinkedin } from "react-icons/fa"; 
import gradAvatar from '../assets/graduation_walk_otw.png';

const LinkedInIcon = () => {
  return <FaLinkedin size={16} className="linkedin-icon" />;
};

// Component for the top section of the profile
const ProfileHeader = ({ user }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <>
      <div className="profile-header">
        <div className="avatar-container">
          <img src={gradAvatar} alt={user.name} className="avatar" />
          {/* <span className="avatar-badge">Alberto V2.0</span> */}
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
        <button className="edit-profile-btn" onClick={openModal}>View Resume</button>
      </div>

      {isModalOpen && (
        <div className="resume-modal-overlay" onClick={closeModal}>
          <div className="resume-modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="resume-modal-close" onClick={closeModal}>×</button>
            <iframe 
              src="/Alberto Mejia Resume.pdf" 
              className="resume-iframe"
              title="Resume"
            />
          </div>
        </div>
      )}
    </>
  );
};


export default ProfileHeader;