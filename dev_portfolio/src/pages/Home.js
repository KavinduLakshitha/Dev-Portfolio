import React from "react";
import "./Home.css";
import Typewriter from "../components/Typewritter";

const typeWriter = ["a frontend Dev.", "an artist."];

function Home() {
  return (
    <div className="home" style={{ height: 500 }}>
      <h4 className="home__badge">HI, MY NAME IS</h4>
      <h1 className="home__bigTopic">
        Kavindu Marasinghe
        <br />
        <span className="home__bigTopictr">
          I am&nbsp;
          <Typewriter data={typeWriter} />
        </span>
      </h1>

      <p className="home__desc">
        I like to build awesome client-side web applications.🚀
        <br />
        Currently I am working on few of my ReactJS projects,
        <br /> learning new technologies and focusing on my university <br />
        life.👨‍💻
      </p>
      <a
        className="btn btn-info"
        href="https://www.linkedin.com/in/kavindu-marasinghe/"
        class="btn btn-info"
        role="button"
        target="_blank"
        rel="noreferrer"
      >
        Do you want to hire me?
      </a>
      <hr className="line" />
    </div>
  );
}

export default Home;
