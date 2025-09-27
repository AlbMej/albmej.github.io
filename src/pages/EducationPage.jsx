import gtLogo from '../assets/schools/gt_favicon.png';
import rpiLogo from '../assets/schools/rpi_favicon.png';
import uconnLogo from '../assets/schools/uconn_favicon.png';
import './EducationPage.css';

const EducationPage = () => (
  <div className="page-card">
    <h1>Education</h1>
    <div className="timeline">

      <div className="timeline-item">
        <div className="education-header">
          <div className="degree-info">
            <h3 className="school-title">
              <img
                src={gtLogo}
                alt="Georgia Institute of Technology Logo"
                className="school-favicon"
              />
              Georgia Institute of Technology, M.S. in Computer Science
            </h3>
            <p className="degree-subtitle">Specialization: Interactive Intelligence</p>
          </div>
          <div className="education-stats">
            <span className="gpa">GPA: 3.63/4.0</span>
            <span className="graduation-date">August 2025</span>
          </div>
        </div>
        <p>Relevant Coursework: Natural Language Processing, AI Ethics & Society, Knowledge-Based AI, AI for Robotics, Game AI,
          ML for Trading, Software Development Process, Digital Marketing, Global Entrepreneurship</p>
      </div>
      
      <div className="timeline-item">
        <div className="education-header">
          <div className="degree-info">
            <h3 className="school-title">
              <img
                src={rpiLogo}
                alt="Rensselaer Polytechnic Institute Logo"
                className="school-favicon"
              />
              Rensselaer Polytechnic Institute, B.S. in Computer Science
            </h3>
            <p className="degree-subtitle">Concentration: AI & Data | Minor(s): Psychology, Game Design Studies</p>
          </div>
          <div className="education-stats">
            <span className="gpa">GPA: 3.55/4.0</span>
            <span className="graduation-date">December 2020</span>
          </div>
        </div>
        <ul>
          <li>Honors & Awards: Cum Laude, Dean's List (Spring 2020), Western Digital STEM Scholarship</li>
          <li>Relevant Coursework: Intro to AI, Machine Learning from Data, Algorithms, Database Systems, Computer Architecture,
            Making Games to Change the World, Art for Interactive Media, History & Culture of Games, Practicum in Management, Gauge Theory-Higher Cognition</li>
        </ul>
      </div>

      <div className="timeline-item">
        <div className="education-header">
          <div className="degree-info">
            <h3 className="school-title">
              <img
                src={uconnLogo}
                alt="University of Connecticut Logo"
                className="school-favicon"
              />
              University of Connecticut, Coursework
            </h3>
            <p className="degree-subtitle">Exploratory studies in Engineering</p>
          </div>
          <div className="education-stats">
            <span className="gpa">GPA: 3.35/4.0</span>
            <span className="graduation-date">Transferred Spring 2018</span>
          </div>
        </div>
        <ul>
          <li>Honors & Awards: Dean's List (Fall 2017, Spring 2018)</li>
          <li>Relevant Coursework: Calculus Series (I, II, III), Applied Linear Algebra, Statistical Methods, Discrete Systems,
            Data Structures and Object-Oriented Design, Principles of Programming in Scheme (LISP Dialect), Intro to Companion Animals</li>
        </ul>
      </div>

    </div>
  </div>
);

export default EducationPage;