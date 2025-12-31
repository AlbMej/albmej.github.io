import React, { useState } from 'react';
import { FaLinkedin } from "react-icons/fa"; 

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
          <img src="https://media.licdn.com/dms/image/v2/D4E35AQFhGpstG99KqA/profile-framedphoto-shrink_400_400/B4EZpfq_Q9HMAc-/0/1762541696448?e=1767769200&v=beta&t=0oAu2kDXXh7uJDCQ5Li1dksT6491f1ptkXzbPXu5duE" alt={user.name} className="avatar" />
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