import React from 'react';
import Tag from '../components/Tag.jsx';
import './ProjectsPage.css';

const ProjectsPage = () => (
  <div className="page-card">
    <h1>Projects</h1>
    <div className="projects-grid">
      <div className="project-item">
        <h3>Project Title 1</h3>
        <p>Project description text 1</p>
        <div className="project-tags">
          <Tag text="PyTorch" type="blue" />
          <Tag text="Reinforcement Learning" type="gray" />
          <Tag text="Unity" type="gray" />
        </div>
      </div>
      <div className="project-item">
        <h3>Project Title 2</h3>
        <p>Project description text 2</p>
        <div className="project-tags">
          <Tag text="Computer Vision" type="gray" />
          <Tag text="FastAPI" type="green" />
          <Tag text="GCP" type="blue" />
          <Tag text="Mobile App" type="gray" />
        </div>
      </div>
    </div>
  </div>
);

export default ProjectsPage;