import "./topbar.scss";
import linkedIn from './linkedin.png';
import github from './github.png';
import email from './email.png';
import resume from './resume.png';
import resumePDF from './Resume.pdf';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
      <div className="wrapper">
        <div className="left">
          <a href="#intro" className="logo">
            Shahil Patel
          </a>
          <a href="https://www.linkedin.com/in/shahil-patel/" rel="noopener noreferrer" target="_blank" >
            <img src={linkedIn} alt="" width="40px"/>
            
          </a>
          <a href="https://www.linkedin.com/in/shahil-patel/" rel="noopener noreferrer" target="_blank" className="logo">
             LinkedIn
          </a>
          <a href="https://github.com/Shahil-Patel" rel="noopener noreferrer" target="_blank" >
            <img src={github} alt="" width="40px"/>
            
          </a>
          <a href="https://github.com/Shahil-Patel" rel="noopener noreferrer" target="_blank" className="logo">
            GitHub
          </a>
          <a href="mailto:shahilp@gmail.com" rel="noopener noreferrer" target="_blank" >
            <img src={email} alt="" width="40px"/>
            
          </a>
          <a href="mailto:shahilp@gmail.com" rel="noopener noreferrer" target="_blank" className="logo">
            shahilp@gmail.com
          </a>
          <a href={resumePDF} rel="noopener noreferrer" target="_blank" >
            <img src={resume} alt="" width="40px"/>
            
          </a>
          <a href={resumePDF} rel="noopener noreferrer" target="_blank" className="logo">
            Resume
          </a>
        </div>
        <div className="right">
          <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
            <span className="line1"></span>
            <span className="line2"></span>
            <span className="line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
}