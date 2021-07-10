import React from 'react';
import images from "../../assets/images";
import "./Work.css";

export default function Work() {
  return (
    <div className="workContainer">
      <h1>My Work</h1>
      <div>
        <p>Congress Bill Tracker</p>
        <a href="https://github.com/David-V-Rullo/Congress-Bill-Tracker">
          <img src={images.congress.default} alt="placeholder" />
        </a>
      </div>
      <div>
        <p>Password Generator</p>
        <a href="https://github.com/patrbraun/Password-Generator">
          <img src={images.passgen.default} alt="placeholder" />
        </a>
      </div>
      <div>
        <p>Guitar Quiz</p>
        <a href="https://github.com/patrbraun/Guitar-Quiz">
          <img src={images.guitar.default} alt="placeholder" />
        </a>
      </div>
      <div>
        <p>Day Planner</p>
        <a href="https://github.com/patrbraun/Day-Planner">
          <img src={images.dayplanner.default} alt="placeholder" />
        </a>
      </div>
      <div>
        <p>Weather Dashboard</p>
        <a href="https://github.com/patrbraun/Weather-Dashboard">
          <img src={images.weather.default} alt="placeholder" />
        </a>
      </div>
      <div>
        <p>Readme Generator</p>
        <a href="https://github.com/patrbraun/readme-generator">
          <img src={images.readme.default} alt="placeholder" />
        </a>
      </div>
      <div>
        <p>Team Profile Generator</p>
        <a href="https://github.com/patrbraun/Team-Profile-Generator">
          <img src={images.team_profile.default} alt="placeholder" />
        </a>
      </div>
      <div>
        <p>Note Taker</p>
        <a href="https://github.com/patrbraun/Note-Taker">
          <img src={images.notetaker.default} alt="placeholder" />
        </a>
      </div>
      <div>
        <p>Employee Manager</p>
        <a href="https://github.com/patrbraun/Employee-Tracker">
          <img src={images.employee_man.default} alt="placeholder" />
        </a>
      </div>
      <div>
        <p>E-Commerce Backend</p>
        <a href="https://github.com/patrbraun/E-Commerce">
          <img src={images.ecommerce.default} alt="placeholder" />
        </a>
      </div>
    </div>
  );
}