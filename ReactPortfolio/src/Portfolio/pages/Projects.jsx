import { useState } from "react";
import React from "react";
import { NavLink } from "react-router-dom";

export default function Projects() {
  const pictures = [
    { pic: "projectPics/AuroraTours.png", caption: "Aurora Tours" },
    { pic: "projectPics/BlackJack.png", caption: "BlackJack Game" },
    { pic: "projectPics/Chowpes.png", caption: "ChowPes Recipes" },
    { pic: "projectPics/memoryGame.png", caption: "Memory Game" },
    { pic: "projectPics/ToDoApp.png", caption: "ToDoApp" },
    { pic: "projectPics/ToDoList.png", caption: "ToDoList" },
    { pic: "projectPics/WormHoleCanvas.png", caption: "Worm Hole" },
    { pic: "projectPics/EarthCanvas.png", caption: "Earth Canvas" },
    {pic: "/projectPics/RockPaperScissors.png",caption: "Rock, Paper,Scissors"},
  ];

  return (
    <div className="projectMain">
      <p className="projPara text-center">
        To checkout the full project check me out on{" "}
        <a href="http://gitlab.wakulla.perseverenow.org/" target="_blank">
          GitLab
        </a>
      </p>
      <div className="carousel-container">
        <div id="carousel">
          {pictures.map((p, index) => (
            <figure key={index}>
              <NavLink
                to="http://gitlab.wakulla.perseverenow.org/"
                target="_blank"
              >
                <img src={p.pic} alt="img" className="projectImg" />
              </NavLink>
              <h5 className="text-center">{p.caption}</h5>
            </figure>
          ))}
        </div>
      </div>
    </div>
  );
}
