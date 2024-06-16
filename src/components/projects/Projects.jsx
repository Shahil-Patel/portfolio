import { useState } from "react";
import "./projects.scss";
import pythonImg from './pythonImg.png';
import csharpImg from './csharpImg.png';
import arrow from './arrow.png';
export default function Works() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const data = [
    {
      id: "1",
      icon: pythonImg,
      title: "Athena",
      link: "https://github.com/Shahil-Patel/Athena",
      desc:
        "Athena is a project that won the HackRU 2022's Google Cloud Category. It algorithmically searches for the most important sentences in a YouTube video, and summarizes the video using these sentences.",
      moreDec: "Athena seeks to help students who are on a time-crunch during important study periods. Students are often given small 5 point assignments in classes that are to summarize or make some opinion of a video. Instead of taking 30-45 minutes watching these videos, students can simply use Athena to gain a basic understanding of the video. It uses Google Cloud API to offload speech detection and storage to Google Cloud ot Increase efficency and to utilize their Speech-to-Text API to create parseable transcripts. NTLK which is Used to calculate the correlation between various words in our algorithm. Also used to scrape the transcript for garbage words (the, then, before) and mark them as negligible. All of it was built in Python 3 including the UI which was build using Python's TKINTER",
      img:
        "https://github-link-card.s3.ap-northeast-1.amazonaws.com/Shahil-Patel/Athena.png",
    },
    {
      id: "2",
      icon: pythonImg,
      title: "RUPlatePal",
      link: "https://github.com/Shahil-Patel/RUPlatePal",
      desc:
        "RUPlatePal is a project that won the HackRU 2023's Best Rutgers Hack. We wanted to help these people in need by creating a software application that would help maximize the amount of meals for these individuals",
      moreDec: "Ever wonder what happens to the leftovers at Rutgers? RUPlatePal serves as the bridge between the dining hall and food pantries by optimizing the resources and generating instructions! RUPlatePal is B2B solution that helps those in need by allowing food pantry's to optimally manage their food and leftover food from the dining halls",
        img:
        "https://github-link-card.s3.ap-northeast-1.amazonaws.com/shahil-patel/RUPlatePal.png",
    },
    {
      id: "3",
      icon: csharpImg,
      title: "Virtual Reality Fruit Ninja",
      link: "https://github.com/Shahil-Patel/Unity-VR-Fruit-Ninja",
      desc:
        "This is a Unity VR Fruit Ninja Game Copy made in 2020. Users use VR headsets and controllers to slice various fruit that pop up around them. Based on the game \"Fruit Ninja\" by Halfbrick Studios.",
      moreDec: "This game utilizes Unity's 3D VR Engine in order to simulate a fully immersive 360 degree enviroment for the user. There are 2 gamemodes, a timed mode and a non timed mode with different mechanics in each one. The physics in the game are coded to replicate the real world as close as possible. The game is coded in C# and was tested using Samsung a Virtual Reality Helmet and two controllers on the Steam Platform.",
      img:
        "https://github-link-card.s3.ap-northeast-1.amazonaws.com/Shahil-Patel/Unity-VR-Fruit-Ninja.png",
    },
  ];
  const text = data[currentSlide].moreDec
  const img = data[currentSlide].img
  const link = data[currentSlide].link
  const handleClick = (way) => {
    way === "left"
      ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2)
      : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  };

  return (
    <div className="works" id="works">
      <div className="title" id="title">Projects</div>
      <div
        className="slider"
        style={{ transform: `translateX(-${currentSlide * 100}vw)` }}
      >
        {data.map((d) => (
          <div className="container">

            <div className="item">
              <div className="left">
                <div className="leftContainer">
                  <div className="imgContainer">
                    <img src={d.icon} alt="" />
                  </div>
                  <h2>{d.title}</h2>
                  <p className="desc" >{d.desc}</p>

                </div>
              </div>
              <div className="right">
                <a href={d.link} rel="noopener noreferrer" target="_blank" >
                  <img src={d.img} alt="" className="img" />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>

      <img
        src={arrow}
        className="arrow left"
        alt=""
        onClick={() => handleClick("left")}
      />
      <div className="currProject">
        <a href={link} rel="noopener noreferrer" target="_blank" >
          <img src={img} alt="" className="curr" />
        </a>
      </div>
      <img
        src={arrow}
        className="arrow right"
        alt=""
        onClick={() => handleClick()}
      />
      <div className="description">{text}</div>
    </div>
  );
}