import React from 'react';
import Tag from '../components/Tag.jsx';
import { FiExternalLink } from 'react-icons/fi';
import './ProjectsPage.css';

// Import tech favicons
import pydanticIcon from '../assets/tech/pydantic_favicon.png';
import pydanticWhiteIcon from '../assets/tech/pydantic_favicon_white.svg';
import fastapiIcon from '../assets/tech/fastapi_favicon.png';
import qdrantIcon from '../assets/tech/qdrant_favicon.png';
import temporalioIcon from '../assets/tech/temporalio_favicon.png';
import azureIcon from '../assets/tech/azure_favicon.svg';
import vllmIcon from '../assets/tech/vllm_favicon.png';
import huggingfaceIcon from '../assets/tech/huggingface_favicon.png';
import googlecolabIcon from '../assets/tech/googlecolab_favicon.png';
import pythonIcon from '../assets/tech/python_favicon.png';
import numpyIcon from '../assets/tech/numpy_favicon.png';
import pandasIcon from '../assets/tech/pandas_favicon.png';
import unslothIcon from '../assets/tech/unsloth_favicon.png';

const ProjectsPage = () => (
  <div className="page-card">
    <h1>Projects</h1>
    <div className="projects-timeline">
      
      <div className="project-item project-item-private">
        <div className="project-header">
          <div className="project-info">
            <h3 className="project-title">
              Private Projects Documentation
              <FiExternalLink className="external-link-icon" />
            </h3>
            <p className="project-subtitle">Technical Documentation & Research</p>
          </div>
          <div className="project-stats">
            <span className="project-duration">Protected Access</span>
          </div>
        </div>
        <p className="tech-stack">Jupyter Notebooks, Python files, PDF Reports</p>
        <p className="project-description">
          <li>Projects done as part of my Master's degree at Georgia Tech.</li>
          <li>Includes notebooks, source code, & comprehensive project reports.</li>
          <li>Note to Recruiters & Hiring Managers: I'd be happy to grant you access to my projects. Contact me so I can whitelist your email.</li>
        </p>
        <a 
          href="https://projects.albertomejia.com" 
          target="_blank" 
          rel="noopener noreferrer"
          className="private-projects-link"
        >
          View Documentation
        </a>
      </div>
      
      <div className="project-item">
        <div className="project-header">
          <div className="project-info">
            <h3 className="project-title">Agentic RAG (Retrieval Augmented Generation)</h3>
            <p className="project-subtitle">AI Engineering</p>
          </div>
          <div className="project-stats">
            <span className="project-duration">08/2025 - Present</span>
          </div>
        </div>
        <p className="tech-stack">Pydantic, FastAPI, Qdrant, Temporal.io, Azure</p>
        <p className="project-description">Implementing a durable Event Driven RAG application. This application takes in a resume pdf, parses it, and stores it into a Vector Database. It then uses an LLM (Google Gemini 1.5 flash) to answer questions on the indexed resume.</p>
        <div className="project-tags">
          <Tag text="Pydantic" type="pydantic" icon={pydanticIcon} />
          <Tag text="FastAPI" type="green" icon={fastapiIcon} />
          <Tag text="Qdrant" type="red" icon={qdrantIcon} />
          <Tag text="Temporal.io" type="uv" icon={temporalioIcon} />
          <Tag text="Azure" type="blue" icon={azureIcon} />
          
        </div>
      </div>

      <div className="project-item">
        <div className="project-header">
          <div className="project-info">
            <h3 className="project-title">Fine-Tuning GPT-OSS-20B for Spanish Reasoning</h3>
            <p className="project-subtitle">Large Language Model Fine-tuning</p>
          </div>
          <div className="project-stats">
            <span className="project-duration">08/2025 - Present</span>
          </div>
        </div>
        <p className="tech-stack">Google Colab, vLLM, Hugging Face libs</p>
        <p className="project-description">Fine tuning GPT-OSS-20B using a multilingual thinking dataset. Evaluated end-to-end on the MMLU dataset using OpenAI's simple-eval framework.</p>
        <div className="project-tags">
          <Tag text="vLLM" type="blue" icon={vllmIcon} />
          <Tag text="Hugging Face" type="hf" icon={huggingfaceIcon} />
          <Tag text="Google Colab" type="yellow" icon={googlecolabIcon} />
          <Tag text="Unsloth" type="teal" icon={unslothIcon} />
        </div>
      </div>

      <div className="project-item">
        <div className="project-header">
          <div className="project-info">
            <h3 className="project-title">AI Stock Trader</h3>
            <p className="project-subtitle">Machine Learning for Trading</p>
          </div>
          <div className="project-stats">
            <span className="project-duration">11/2021 - 12/2021</span>
          </div>
        </div>
        <p className="tech-stack">Python (NumPy, Pandas, Matplotlib)</p>
        <p className="project-description">Experimented with a strategy learner to create trading rules using technical indicators, classification, & time-series data.</p>
        <div className="project-tags">
          <Tag text="Python" type="blue" icon={pythonIcon} />
          <Tag text="NumPy" type="numpy" icon={numpyIcon} />
          <Tag text="Pandas" type="pandas" icon={pandasIcon} />
        </div>
      </div>

    </div>
  </div>
);

export default ProjectsPage;