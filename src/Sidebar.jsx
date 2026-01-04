import React from 'react';
import {
  FiHome,       // For HomeIcon
  FiBriefcase,  // For ExperienceIcon (was EventsIcon)
  FiTool,     // For ProjectsIcon (was ContentIcon) - could also use FiCode or FiTool, FiFolder
} from 'react-icons/fi'; // Using Feather Icons for consistency
import { PiStudentBold  } from "react-icons/pi";  // For EducationIcon
// import { IoFlaskOutline } from "react-icons/io5"; // For ExperimentsIcon

const HomeIcon = () => <FiHome size={24} color="currentColor" />;
const EducationIcon = () => <PiStudentBold size={24} color="currentColor" />;
const ExperienceIcon = () => <FiBriefcase size={24} color="currentColor" />;
const ProjectsIcon = () => <FiTool size={24} color="currentColor" />;
// const ExperimentsIcon = () => <IoFlaskOutline size={24} color="currentColor" />;


// The new Sidebar Component
const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { icon: <HomeIcon />, text: 'About' },
    { icon: <EducationIcon />, text: 'Education' },
    { icon: <ExperienceIcon />, text: 'Experience' },
    { icon: <ProjectsIcon />, text: 'Projects' },
    // { icon: <ExperimentsIcon />, text: 'Experiments' },
    // Add other nav items here
  ];

  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        {/* TODO: my Logo? */}
        <h3>Alberto Mejia</h3>
      </div>
      <nav className="sidebar-nav">
        {navItems.map((item) => (
          <a
            key={item.text}
            href="#"
            className={`nav-item ${activeTab === item.text ? 'active' : ''}`}
            onClick={() => setActiveTab(item.text)}
          >
            {item.icon}
            <span>{item.text}</span>
          </a>
        ))}
      </nav>
    </aside>
  );
};

export default Sidebar;