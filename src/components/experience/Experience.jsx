import { useEffect, useState } from "react";
import PortfolioList from "../portfolioList/PortfolioList";
import "./experience.scss";
import {
  workList,
  internList,
  researchList,
  clubList,
} from "../../data";

export default function Experience() {
  const [selected, setSelected] = useState("work");
  const [data, setData] = useState([]);
  const list = [
    {
      id: "work",
      title: "Full Time Work",
    },
    {
      id: "intern",
      title: "Internships",
    },
    {
      id: "research",
      title: "Research",
    },
    {
      id: "club",
      title: "Clubs",
    },
  ];
  useEffect(() => {
    switch (selected) {
      case "work":
        setData(workList);
        break;
      case "intern":
        setData(internList);
        break;
      case "research":
        setData(researchList);
        break;
      case "club":
        setData(clubList);
        break;
      default:
        setData(internList);
    }
  }, [selected]);

  return (
    <div className="experience" id="experience">
      <h1>Experience</h1>
      <ul>
        {list.map((item) => (
          <PortfolioList
            title={item.title}
            active={selected === item.id}
            setSelected={setSelected}
            id={item.id}
          />
        ))}
      </ul>
      <div className="container">
        {data.map((d) => (
            <div className="tittle">
              {d.title}: 
            <div className="subtitle">
              {d.subtitle}
              </div>
              <div className="body">
              {d.info}
              </div>
            </div>
            
        ))}
      </div>
    </div>
  );
}