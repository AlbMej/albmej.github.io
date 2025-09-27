import React from 'react';
import ProfileHeader from '../components/ProfileHeader.jsx';
import Tag from '../components/Tag.jsx';
import './AboutPage.css';

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

// Reusable component for a single profile detail row
const ProfileDetail = ({ label, children }) => (
  <div className="profile-detail">
    <span className="detail-label">{label}</span>
    <div className="detail-value">{children}</div>
  </div>
);

const AboutPage = () => {
    return (
        <div className="page-card">
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
                    {userData.domain.map(item => <Tag key={item} text={item} type="cyan" />)}
                </ProfileDetail>
                
                <ProfileDetail label="Highest Level Of Study">
                    <Tag text={userData.highestLevelOfStudy} type="lavender" />
                </ProfileDetail>
                
                <ProfileDetail label="AI Interests">
                    {userData.aiInterests.map(item => <Tag key={item} text={item} type="lime-green" />)}
                </ProfileDetail>
                
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
    );
};

export default AboutPage;