import React from 'react';
import twitchLogo from '../assets/twitch_favicon.png';
import citiLogo from '../assets/citi_favicon.png';
import telLogo from '../assets/tel_favicon.png';
import rpiLogo from '../assets/rpi_favicon.png';
import ibmLogo from '../assets/ibm_favicon.png';
import './ExperiencePage.css';

const ExperiencePage = () => (
  <div className="page-card">
    <h1>Experience</h1>
    <div className="timeline">
      
      <div className="timeline-item">
        <div className="experience-header">
          <div className="job-info">
            <h3 className="company-title">
              <img
                src={twitchLogo}
                alt="Twitch Interactive Logo"
                className="company-favicon"
              />
              Twitch Interactive (Amazon)
            </h3>
            <p className="job-subtitle">Machine Learning Engineer • Monetization, Commerce Personalization Team</p>
          </div>
          <div className="experience-stats">
            <span className="job-duration">07/2022 - 06/2023</span>
            <span className="job-location">San Francisco, CA</span>
          </div>
        </div>
        <p className="tech-stack">Go, TypeScript, AWS (Lambda, Airflow/MWAA, CDK, etc.)</p>
        <ul>
          <li>Led the Payment Suspension Report (PSR) pipeline overhaul, automating data lake uploads and extending fraud tables; streamlining fraud data workflows that reduced payout requirements by 50%, supporting the Money team's mission.</li>
          <li>Boosted fraud detection by enabling historical analysis and downstream fraud signal development.</li>
          <li>Implemented ML infrastructure for our models, allowing applied scientists to track performance metrics in CloudWatch.</li>
        </ul>
      </div>

      <div className="timeline-item">
        <div className="experience-header">
          <div className="job-info">
            <h3 className="company-title">
              <img
                src={citiLogo}
                alt="Citi Logo"
                className="company-favicon"
              />
              Citi
            </h3>
            <p className="job-subtitle">Machine Learning Engineer • Global Consumer Technology</p>
          </div>
          <div className="experience-stats">
            <span className="job-duration">07/2021 - 07/2022</span>
            <span className="job-location">Dallas, TX</span>
          </div>
        </div>
        <p className="tech-stack">PySpark, Hive, YARN, HDFS</p>
        <ul>
          <li>Migrated data science models to Citi's Big Data EAP to allow end-to-end model development, analysis, and automation.</li>
          <li>Managed model deployment across environments, coordinating approvals and resolving migration-related issues.</li>
          <li>Created onboarding materials and training methodologies for new hires and facilitated stakeholder communication.</li>
        </ul>
      </div>

      <div className="timeline-item">
        <div className="experience-header">
          <div className="job-info">
            <h3 className="company-title">
              <img
                src={telLogo}
                alt="Tokyo Electron Limited Logo"
                className="company-favicon"
              />
              Tokyo Electron Limited
            </h3>
            <p className="job-subtitle">Data Informatics Analyst Intern</p>
          </div>
          <div className="experience-stats">
            <span className="job-duration">01/2020 - 05/2020</span>
            <span className="job-location">Albany, NY</span>
          </div>
        </div>
        <p className="tech-stack">Python (PySide2, Matplotlib, Pandas)</p>
        <ul>
          <li>Worked with several teams to design and create a GUI for customer data analysis, collection, & result streamlining.</li>
          <li>Assisted with code optimization and harmonization between current data analytic programs; reduced SLOC by 50%.</li>
        </ul>
      </div>

      <div className="timeline-item">
        <div className="experience-header">
          <div className="job-info">
            <h3 className="company-title">
              <img
                src={rpiLogo}
                alt="RPI Logo"
                className="company-favicon"
              />
              RPI - Institute for Data Exploration and Applications
            </h3>
            <p className="job-subtitle">Undergraduate Researcher</p>
          </div>
          <div className="experience-stats">
            <span className="job-duration">09/2019 - 12/2019</span>
            <span className="job-location">Troy, NY</span>
          </div>
        </div>
        <p className="tech-stack">Python (OpenCV)</p>
        <ul>
          <li>Researched the application & feasibility of various Computer Vision techniques for the Hockey Motion Capture project.</li>
          <li>Applied techniques such as color masking and contour detection to track fast moving objects.</li>
        </ul>
      </div>

      <div className="timeline-item">
        <div className="experience-header">
          <div className="job-info">
            <h3 className="company-title">
              <img
                src={ibmLogo}
                alt="IBM Logo"
                className="company-favicon"
              />
              IBM - Power Systems Performance
            </h3>
            <p className="job-subtitle">Cognitive Software Developer Intern</p>
          </div>
          <div className="experience-stats">
            <span className="job-duration">06/2019 - 08/2019</span>
            <span className="job-location">Austin, TX</span>
          </div>
        </div>
        <p className="tech-stack">Bash, Python, Red Hat Enterprise Linux</p>
        <ul>
          <li>Developed automated processes to accelerate IBM POWER9' & POWER10 chip deployment for post-silicon validation.</li>
          <li>Saved 100+ hours of labor via benchmarking scripts, data processing & simplification, and interactive charts/graphs.</li>
        </ul>
      </div>

      <div className="timeline-item">
        <div className="experience-header">
          <div className="job-info">
            <h3 className="company-title">
              <img
                src={rpiLogo}
                alt="RPI Logo"
                className="company-favicon"
              />
              RPI - Cognitive and Immersive Systems Lab
            </h3>
            <p className="job-subtitle">Undergraduate Researcher</p>
          </div>
          <div className="experience-stats">
            <span className="job-duration">02/2019 - 05/2019</span>
            <span className="job-location">Troy, NY</span>
          </div>
        </div>
        <p className="tech-stack">Python</p>
        <ul>
          <li>Researched Natural Language Generation for a Multimodal Dialogue/Machine Teaching research project.</li>
          <li>Refined agent dialogue to match the complexity of the user by computing the difficulty of spoken sentences.</li>
        </ul>
      </div>

      <div className="timeline-item">
        <div className="experience-header">
          <div className="job-info">
            <h3 className="company-title">
              <img
                src={ibmLogo}
                alt="IBM Logo"
                className="company-favicon"
              />
              IBM - Watson Customer Engagement
            </h3>
            <p className="job-subtitle">Software Development Intern</p>
          </div>
          <div className="experience-stats">
            <span className="job-duration">06/2018 - 08/2018</span>
            <span className="job-location">Dublin, OH</span>
          </div>
        </div>
        <p className="tech-stack">Java (IBM 10x), Chef-Generator, Maven, Vagrant VM, WebSphere</p>
        <ul>
          <li>Improved IBM Inflight's usability through reduced clicks, labels, and simplification of data presentations.</li>
          <li>Learned agile methodologies, UX design, & enhanced client exposure to IBM Cloud data processing.</li>
        </ul>
      </div>

    </div>
  </div>
);

export default ExperiencePage;