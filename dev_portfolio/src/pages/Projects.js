import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects" style={{ minHeight: 500 }}>
      <span className="projects__badge">Dummy</span>
      <h1 className="projects__bigTopic" style={{ marginTop: "80px" }}>
        My Coding Projects🛠️
      </h1>

      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 g-0">
            <div className="left d-flex justify-content-center">
              <img
                style={{
                  objectFit: "contain",
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="project__item1"
                src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1660448080/Web-portfolio/ap_x6atug.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 g-0">
            <div className="right d-flex justify-content-center align-items-space-between">
              <p className="projects__desc">
                <h1 className="project__itemsTitle">Portraits by Kavindu</h1>
                This is my art portfolio. As an artist, I have always wanted to
                design a website for my business. It is a simple but
                well-responsive design across multiple devices. This is my first
                personal project.
                <br />
                <a
                  className="projects__github"
                  href="https://github.com/KavinduLakshitha/Portraits-By-Kavindu"
                  target="_blank"
                  rel="noreferrer"
                >
                  🔗Github Repo
                </a>
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
                <div className="btn-left">
                  <a
                    type="button"
                    href="https://www.portraitsbykavindu.art/"
                    class="btn btn-outline-info"
                    role="button"
                    rel="noreferrer"
                    target="_blank"
                  >
                    &#10094;&nbsp;&nbsp;View
                    Demo&nbsp;&nbsp;&frasl;&nbsp;&#10095;
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          height: "1px",
          color: "white",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      {/* Project 2 */}

      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 g-0">
            <div className="left d-flex justify-content-center align-items-center">
              <p className="projects__desc" style={{ textAlign: "left" }}>
                <h1
                  className="project__itemsTitle"
                  style={{ textAlign: "left" }}
                >
                  Netflix-Ish
                </h1>
                Netflix-ish is a cloned version of the popular streaming service
                Netflix. I have used ReactJS, Redux, TMDB ( The Movie Database )
                and firebase to build this application.
                <br />
                <a
                  className="projects__github"
                  href="https://github.com/KavinduLakshitha/Netflix-clone-Redux"
                  target="_blank"
                  rel="noreferrer"
                >
                  🔗Github Repo
                </a>
                <br />
                <ul class="list-group">
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;ReactJS/ Redux
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;TMDB
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;Firebase
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;Email & Password Authentication
                  </li>
                </ul>
                <div className="btn-left">
                  <a
                    type="button"
                    href="https://netflix-b865e.web.app/"
                    class="btn btn-outline-info"
                    role="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    &#10094;&nbsp;&nbsp;View
                    Demo&nbsp;&nbsp;&frasl;&nbsp;&#10095;
                  </a>
                </div>
              </p>
            </div>
          </div>
          <div className="col-md-6 g-0">
            <div className="right d-flex justify-content-center">
              <img
                style={{
                  objectFit: "contain",
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="project__item1"
                src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1660448082/Web-portfolio/NF_tt0bo0.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          height: "1px",
          color: "white",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      {/* Project 3 */}

      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 g-0">
            <div className="left d-flex justify-content-center">
              <img
                style={{
                  objectFit: "contain",
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="project__item1"
                src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1660448070/Web-portfolio/google_ngdgq7.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 g-0">
            <div className="right d-flex justify-content-center align-items-space-between">
              <p className="projects__desc">
                <h1 className="project__itemsTitle">Google-Ish</h1>
                This is a google-like search engine that I have built. I've used
                ReactJS, Material UI, Google Search API and Firebase in this
                project.
                <br />
                <a
                  className="projects__github"
                  href="https://github.com/KavinduLakshitha/Google-Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  🔗Github Repo
                </a>
                <br />
                <ul class="list-group">
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;ReactJS
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;Material UI
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;Firebase
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;Google Search API
                  </li>
                </ul>
                <div className="btn-left">
                  <a
                    type="button"
                    href="https://clone-005.web.app/"
                    class="btn btn-outline-info"
                    role="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    &#10094;&nbsp;&nbsp;View
                    Demo&nbsp;&nbsp;&frasl;&nbsp;&#10095;
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          height: "1px",
          color: "white",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      {/* Project 4 */}

      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 g-0">
            <div className="left d-flex justify-content-center align-items-center">
              <p className="projects__desc" style={{ textAlign: "left" }}>
                <h1
                  className="project__itemsTitle"
                  style={{ textAlign: "left" }}
                >
                  Messenger-ish
                </h1>
                This is a full stack facebook-messenger clone. Here I have
                specially used Firebase Firestore as the Database for the
                application.
                <br />
                <a
                  className="projects__github"
                  href="https://github.com/KavinduLakshitha/Facebook_Messenger_Clone"
                  target="_blank"
                  rel="noreferrer"
                >
                  🔗Github Repo
                </a>
                <br />
                <ul class="list-group">
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;ReactJS
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;Material UI
                  </li>
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;Firebase
                  </li>
                </ul>
                <div className="btn-left">
                  <a
                    type="button"
                    href="https://messenger-clone-7bb55.web.app/"
                    class="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    &#10094;&nbsp;&nbsp;View
                    Demo&nbsp;&nbsp;&frasl;&nbsp;&#10095;
                  </a>
                </div>
              </p>
            </div>
          </div>
          <div className="col-md-6 g-0">
            <div className="right d-flex justify-content-center">
              <img
                style={{
                  objectFit: "contain",
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="project__item1"
                src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1660448068/Web-portfolio/messenger_itg99a.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      <hr
        style={{
          height: "1px",
          color: "white",
          width: "80%",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      />

      {/* Project 5 */}

      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 g-0">
            <div className="left d-flex justify-content-center">
              <img
                style={{
                  objectFit: "contain",
                  width: "90%",
                  marginLeft: "auto",
                  marginRight: "auto",
                }}
                className="project__item1"
                src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1660448083/Web-portfolio/todo_cqbcdk.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 g-0">
            <div className="right d-flex justify-content-center align-items-space-between">
              <p className="projects__desc">
                <h1 className="project__itemsTitle">Todo App</h1>
                This is a small Todo application. But it has all the CRUD
                funcionalities implemented. Can be usefull in day-to-day life.
                <br />
                <a
                  className="projects__github"
                  href="https://github.com/KavinduLakshitha/To-Do-App"
                  target="_blank"
                  rel="noreferrer"
                >
                  🔗Github Repo
                </a>
                <br />
                <ul class="list-group">
                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;ReactJS
                  </li>

                  <li class="list-group-item">
                    <i class="bi bi-check-circle-fill"></i>
                    &nbsp;&nbsp;&nbsp;Firebase
                  </li>
                </ul>
                <div className="btn-left">
                  <a
                    type="button"
                    href="https://todo-app-548e1.web.app/"
                    class="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    &#10094;&nbsp;&nbsp;View
                    Demo&nbsp;&nbsp;&frasl;&nbsp;&#10095;
                  </a>
                </div>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;