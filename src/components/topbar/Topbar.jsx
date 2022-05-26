import "./topbar.scss";
import linkedIn from './linkedin.png';
import github from './github.png';
import email from './email.png';
import resume from './resume.png';
import resumePDF from './Resume.pdf';

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"navigator "+(menuOpen && "active")}>
            <div className="wrapper">
                <div className="left">
                    <a className="logo" href="#intro" >Shahil Patel</a>
                    <div className="itemContainer">
                      <img src={email} alt="" width="40px"/>
                        <span ><a  href="mailto:shahilp@gmail.com" target="_blank" rel="noreferrer">shahilp@gmail.com</a></span>
                    </div>
                    <div className="itemContainer">
                      <img src={linkedIn} alt="" width="40px"/>
                        <span ><a  href="https://linkedin.com/in/shahil-patel" target="_blank" rel="noreferrer"  >LinkedIn</a></span>
                    </div>
                    <div className="itemContainer">
                      <img src={github} alt="" width="40px"/>
                        <span ><a  href="https://github.com/shahil-patel"  target="_blank" rel="noreferrer">Github</a></span>
                    </div>
                    <div className="itemContainer">
                      <img src={resume} alt="" width="40px"/>
                        <span ><a  href={resumePDF} target="_blank" rel="noreferrer">Resume</a></span>
                    </div>

                </div>
                <div className="right">
                    <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                        <span className="line1"> </span>
                        <span className="line2"> </span>
                        <span className="line3"> </span>
                    </div>
                </div>                
            </div>
        </div>
  );
}