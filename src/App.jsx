import Topbar from "./components/topbar/Topbar";
import Intro from "./components/intro/Intro";
import Experience from "./components/experience/Experience";
import Projects from "./components/projects/Projects";
import Education from "./components/education/Education";
import Skills from "./components/skills/Skills";
import "./app.scss";
import { useState } from "react";
import Menu from "./components/menu/Menu";

function App() {
  const [menuOpen,setMenuOpen] = useState(false)
  return (
    <div className="app">
     <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
     <div className="sections">
       <Intro/>
       <Experience/>
       <Projects/>
       <Education/>
       <Skills/>
     </div>
    </div>
  );
}

export default App;