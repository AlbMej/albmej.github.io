// App.jsx is the Root/top-level component of the React application
import React, { useState } from 'react';
import './App.css';
// Shared components
import Sidebar from './Sidebar.jsx';
// Page components
import AboutPage from './pages/AboutPage.jsx';
import ExperiencePage from './pages/ExperiencePage.jsx';
import EducationPage from './pages/EducationPage.jsx';
import ProjectsPage from './pages/ProjectsPage.jsx';

// Component for the top section of the profile

// Main App component
function App() {
  const [activeTab, setActiveTab] = useState('About'); // State to track the active tab

    const renderContent = () => {
      switch (activeTab) {
        case 'About':
          return <AboutPage />;
        case 'Education':
          return <EducationPage />;
        case 'Experience':
          return <ExperiencePage />;
        case 'Projects':
          return <ProjectsPage />;
        default:
          return <AboutPage />;
      }
  };

  return (
    <div className="app-layout">
      {/* Update the props passed to Sidebar */}
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />

      <main className="main-content">
        {renderContent()}
      </main>
    </div>
  );

}

export default App;