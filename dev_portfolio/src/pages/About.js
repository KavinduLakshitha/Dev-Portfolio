import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about" style={{ minHeight: 500 }}>
      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 g-0">
            <div className="left d-flex justify-content-center">
              <img
                style={{
                  objectFit: "contain",
                  width: "60%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="project__item1"
                src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1660485444/Web-portfolio/portfolio_gedhgy.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 g-0">
            <div className="right d-flex justify-content-center align-items-space-between">
              <p className="projects__desc">
                <span className="home__badge">WHO AM I?</span>
                <br />
                <br />
                <h1 className="aboutme__Title">I'm Kavindu Marasinghe</h1>
                👨‍💻I am a 3rd-year undergraduate specializing in Information
                Technology at SLIIT. I've done a few ReactJS-based projects
                alone and as group projects at the uni. I'm trying to learn new
                technologies such as NextJs, Tailwind CSS and Web 3.0
                development. <br />
                <br />
                When I am not coding or studying, I'd like to introduce my self
                as an artist. I mostly do portrait arts as my hobby as well as a
                freelancer.
                <br />
                <br />
                My preffered weapons of choice👇
                <br />
                <ul class="list-group">
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;ReactJS
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;Bootstrap
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;Firebase
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;Cloudinary
                  </li>
                </ul>
              </p>
            </div>
          </div>
        </div>
      </div>

      <a
        className="btn btn-info"
        href="https://github.com/KavinduLakshitha/"
        class="btn btn-info"
        role="button"
        target="_blank"
        rel="noreferrer"
        style={{ marginBottom: "40px" }}
      >
        My Github
      </a>

      <hr
        style={{
          /* height: "10px", */
          color: "white",
          width: "70%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      <h1
        style={{
          fontSize: "28px",
          fontWeight: "bold",
          color: "white",
          letterSpacing: "1px",
          paddingTop: "10px",
          paddingRight: "10px",
        }}
      >
        Want me to build stuff for you? Hit me on LinkedIn.
        <a
          className="btn btn-info btn-outline"
          href="https://www.linkedin.com/in/kavindu-marasinghe/"
          class="btn btn-info"
          role="button"
          target="_blank"
          rel="noreferrer"
          style={{ marginBottom: "40px" }}
        >
          My LinkedIn
        </a>
        <hr
          style={{
            /* height: "10px", */
            color: "white",
            width: "70%",
            marginLeft: "auto",
            marginRight: "auto",
            marginBottom: "50px",
          }}
        />
      </h1>
    </div>
  );
}

export default About;
