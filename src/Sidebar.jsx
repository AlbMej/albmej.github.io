import {
  FiHome,       // For HomeIcon
  FiBook,       // For EducationIcon
  FiBriefcase,  // For ExperienceIcon (was EventsIcon)

  FiCode,     // For ProjectsIcon (was ContentIcon) - could also use FiCode or FiTool, FiFolder
  FiFolder,
  FiTool,
  
  
} from 'react-icons/fi'; // Using Feather Icons for consistency
import { PiStudentBold  } from "react-icons/pi";

const HomeIcon = () => <FiHome size={24} color="currentColor" />;
const EducationIcon = () => <PiStudentBold size={24} color="currentColor" />;
const ExperienceIcon = () => <FiBriefcase size={24} color="currentColor" />;
const ProjectsIcon = () => <FiFolder size={24} color="currentColor" />;
const Projects2Icon = () => <FiTool size={24} color="currentColor" />;
const Projects3Icon = () => <FiCode size={24} color="currentColor" />;


// The new Sidebar Component
const Sidebar = ({ activeTab, setActiveTab }) => {
  const navItems = [
    { icon: <HomeIcon />, text: 'About' },
    { icon: <EducationIcon />, text: 'Education' },
    { icon: <ExperienceIcon />, text: 'Experience' },
    { icon: <ProjectsIcon />, text: 'Projects' },
    { icon: <Projects2Icon />, text: 'Projects' },
    { icon: <Projects3Icon />, text: 'Projects' },
    // Add other nav items from the image here
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