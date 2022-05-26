import "./intro.scss";
import { init } from "ityped";
import { useEffect, useRef } from "react";
import man from './man.png';
import resumePDF from './Resume.pdf';
export default function Intro() {
  const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1750,
      backSpeed:60,

      strings: ["Software Engineer", "Data Scientist", "Student @ Rutgers - NB","Transportation AI Researcher"],
    });
  }, []);

  return (
    <div className="intro" id = "intro">
    <div className="left">
        <div className="imageContainer">
            <img src={man} alt=""></img>
        </div>
    </div>

     <div className="right">
        <div className="wrapper">

            <h2>Hi, I'm</h2>
            <h1>Shahil Patel</h1>
            <h3 ><span ref = {textRef}></span></h3>
            <div className="iconContainer">
            <div className="itemContainer">
            <a  href="mailto:shahilp@gmail.com" target="_blank" rel="noreferrer" >
            <div className="col">
                <span>Email</span>
            </div>
            </a>
            </div>
            <div className="itemContainer">
            <a  href="https://linkedin.com/in/shahil-patel" target="_blank" rel="noreferrer"  >
                <div className="col">
                <span>LinkedIn</span>
                </div>
                </a>
            </div>
            <div className="itemContainer">
            <a  href="https://github.com/shahil-patel" target="_blank" rel="noreferrer" >
                    <div className="col">
                        <span>GitHub</span>
                </div>
                </a>
            </div>
            <div className="itemContainer">
            <a  href={resumePDF} target="_blank" rel="noreferrer" >
                <div className="col">
                <span>Resume</span>
            </div>
            </a>
            </div>
            </div>
        </div>
    </div>
</div>
  );
}