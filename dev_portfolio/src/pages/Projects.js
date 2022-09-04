import React from "react";
import "./Projects.css";

function Projects() {
  return (
    <div className="projects" style={{ minHeight: 600 }}>
      <br />
      <br />
      <h1 className="projects__bigTopic" style={{ marginTop: "80px" }}>
        My Coding Projects
      </h1>

      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 g-0">
            <div className="left d-flex justify-content-center">
              <img
                style={{
                  objectFit: "contain",
                  width: "90%",
                  margin: "auto",
                  marginTop: "75px",
                  boxShadow:
                    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.6)",
                }}
                className="project__item1"
                src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1660448080/Web-portfolio/ap_x6atug.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 g-0">
            <div className="right d-flex justify-content-center align-items-space-between">
              <div className="projects__desc">
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
                <span className="btn-left">
                  <a
                    type="button"
                    href="https://www.portraitsbykavindu.art/"
                    class="btn btn-outline-info"
                    role="button"
                    rel="noreferrer"
                    target="_blank"
                  >
                    View Demo
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 2 */}

      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 g-0">
            <div className="right d-flex justify-content-center align-items-space-between">
              <div className="projects__desc">
                <h1 className="project__itemsTitle">Netflix-Ish</h1>
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
                <span className="btn-left">
                  <a
                    type="button"
                    href="https://netflix-b865e.web.app/"
                    class="btn btn-outline-info"
                    role="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Demo
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 g-0">
            <div className="right d-flex justify-content-center">
              <img
                style={{
                  objectFit: "contain",
                  width: "90%",
                  margin: "auto",
                  marginTop: "75px",
                  boxShadow:
                    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.6)",
                }}
                className="project__item1"
                src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1660448082/Web-portfolio/NF_tt0bo0.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project 3 */}

      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 g-0">
            <div className="left d-flex justify-content-center">
              <img
                style={{
                  objectFit: "contain",
                  width: "90%",
                  margin: "auto",
                  marginTop: "75px",
                  boxShadow:
                    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.6)",
                }}
                className="project__item1"
                src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1660448070/Web-portfolio/google_ngdgq7.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 g-0">
            <div className="right d-flex justify-content-center align-items-space-between">
              <div className="projects__desc">
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
                <span className="btn-left">
                  <a
                    type="button"
                    href="https://clone-005.web.app/"
                    class="btn btn-outline-info"
                    role="button"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Demo
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Project 4 */}

      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 g-0">
            <div className="left d-flex justify-content-center align-items-space-between">
              <div className="projects__desc">
                <h1 className="project__itemsTitle">Messenger-ish</h1>
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
                <span className="btn-left">
                  <a
                    type="button"
                    href="https://messenger-clone-7bb55.web.app/"
                    class="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Demo
                  </a>
                </span>
              </div>
            </div>
          </div>
          <div className="col-md-6 g-0">
            <div className="right d-flex justify-content-center">
              <img
                style={{
                  objectFit: "contain",
                  width: "90%",
                  margin: "auto",
                  marginTop: "75px",
                  boxShadow:
                    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.6)",
                }}
                className="project__item1"
                src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1660448068/Web-portfolio/messenger_itg99a.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>

      {/* Project 5 */}

      <div className="container">
        <div className="row g-0">
          <div className="col-md-6 g-0">
            <div className="left d-flex justify-content-center">
              <img
                style={{
                  objectFit: "contain",
                  width: "90%",
                  margin: "auto",
                  marginTop: "75px",
                  boxShadow:
                    " 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.6)",
                }}
                className="project__item1"
                src="https://res.cloudinary.com/ddt5pwieo/image/upload/v1660448083/Web-portfolio/todo_cqbcdk.png"
                alt=""
              />
            </div>
          </div>
          <div className="col-md-6 g-0">
            <div className="right d-flex justify-content-center align-items-space-between">
              <div className="projects__desc">
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
                <span className="btn-left">
                  <a
                    type="button"
                    href="https://todo-app-548e1.web.app/"
                    class="btn btn-outline-info"
                    target="_blank"
                    rel="noreferrer"
                  >
                    View Demo
                  </a>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <hr className="line" /> */}
    </div>
  );
}

export default Projects;
