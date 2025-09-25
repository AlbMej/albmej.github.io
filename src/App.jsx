// Root/top-level component of the React application
import React from 'react';
import './App.css';
import { FaLinkedin } from "react-icons/fa"; // Import the specific icon

// SVG icon for LinkedIn
// const LinkedInIcon = () => (
//   <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="currentColor" className="linkedin-icon">
//     <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
//   </svg>
// );
const LinkedInIcon = () => {
  // You can pass style and className props to it
  return <FaLinkedin size={16} className="linkedin-icon" />;
};

// Reusable component for tags/pills
const Tag = ({ text, type = 'default' }) => (
  <span className={`tag ${type}`}>{text}</span>
);

// Reusable component for a single profile detail row
const ProfileDetail = ({ label, children }) => (
  <div className="profile-detail">
    <span className="detail-label">{label}</span>
    <div className="detail-value">{children}</div>
  </div>
);

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

// Main App component
function App() {
  const userData = {
    name: "Alberto Mejia",
    linkedinUrl: "https://www.linkedin.com/in/albmej/", 
    title: ["Student @ Georgia Institute of Technology"],
    bio: ["Changing the world, one person at a time"],
    location: ["New York, New York, United States"],
    pronouns: ["he/him"],
    domain: ["Engineering & Technology", "Computer Science"],
    highestLevelOfStudy: ["Masters degree"],
    worksInML: ["Yes"],
    aiInterests: ["Safety & Alignment", "Bias/Fairness", "Entrepreneurship & Invention", "Arts, Entertainment, Creativity", "Research Science", "Human Health", "Education"],
    howToContribute: ["Contribute to AI: data collection, model evaluation, special projects", "Networking and forming new connections"],
    humanityScaleProblem: "I'm drawn to AI's struggle in complex domains like Healthcare. Despite AI's biological basis, solving health problems is incredibly hard. My goal is advancing AI to empower others to tackle currently intractable problems. I believe AGI is the path towards that.",
    favoriteArtist: ["Grupo Frontera"],
  };

  return (
    <div className="app-container">
      {/* TODO: Sidebar and Header are omitted for now*/}
      <main className="main-content">
        <div className="profile-card">
          <ProfileHeader user={userData} />

          <section className="profile-section">
            <h2>Bio</h2>
            <p>{userData.bio}</p>
          </section>

          <section className="profile-section">
            <ProfileDetail label="Location">
              {userData.location.map(item => <Tag key={item} text={item} type="orange" />)}
            </ProfileDetail>
            {/* <ProfileDetail label="Preferred Pronouns">
              {userData.pronouns.map(item => <Tag key={item} text={item} type="green" />)}
            </ProfileDetail> */}
            <ProfileDetail label="Domain">
              {userData.domain.map(item => <Tag key={item} text={item} type="teal" />)}
            </ProfileDetail>
            <ProfileDetail label="Highest Level Of Study">
              <Tag text={userData.highestLevelOfStudy} type="lavender" />
            </ProfileDetail>
            {/* <ProfileDetail label="Do You Work In ML/AI?">
              <Tag text={userData.worksInML} type="green" />
            </ProfileDetail> */}
            <ProfileDetail label="AI Interests">
              {userData.aiInterests.map(item => <Tag key={item} text={item} type="lime-green" />)}
            </ProfileDetail>
            {/* <ProfileDetail label="How I Want To Be Involved/Contribute To This Community">
              {userData.howToContribute.map(item => <Tag key={item} text={item} type="gray" />)}
            </ProfileDetail> */}
            <ProfileDetail label="What Humanity-Scale Problem Would You Like To Solve With AI?">
              <div className="highlight-box">
                <p>{userData.humanityScaleProblem}</p>
              </div>
            </ProfileDetail>
             <ProfileDetail label="My Favorite Artist/Creative">
              {userData.favoriteArtist.map(item => <Tag key={item} text={item} type="light-green" />)}
            </ProfileDetail>
          </section>
        </div>
      </main>
    </div>
  );
}

export default App;