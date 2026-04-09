import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { useRef } from "react";

function App() {
  const contactRef = useRef(null);

  return (
    <>
      <header className="container mt-3">
        <h4 className="d-flex align-items-center gap-3 justify-content-center justify-content-lg-start">
          <i className="bi bi-person-circle"></i>
          <span style={{ cursor: "pointer" }}>Divesh Nikam</span>
        </h4>
      </header>

      <hr />

      <div className="container">
        <div className="row align-items-center">
          <div className="col-lg-7 col-md-12 text-center text-lg-start">
            <h1
              className="fw-bold display-1 mb-5"
              style={{ marginTop: "5rem" }}
            >
              Divesh Nikam
            </h1>

            <h3 className="fw-semibold text-muted mb-3">
              Full Stack Developer
            </h3>

            <div
              style={{
                width: "120px",
                height: "4px",
                backgroundColor: "green",
                marginBottom: "1.5rem",
                marginTop: "1rem",
                marginLeft: "0",
              }}
              className="d-none d-lg-block"
            ></div>

            <div className="lead fw-light text-dark mb-4 mt-5">
              <p>
                Passionate full-stack developer crafting intuitive digital
                experiences with modern tools. Always eager to learn, build, and
                explore new ideas.
              </p>

              <p className="mb-0">
                Building modern, scalable applications using the MERN stack with
                intuitive and user-centered design.
              </p>
            </div>

            <div className="d-flex justify-content-center justify-content-lg-start gap-3 mt-4">
              <button
                className="btn btn-success px-4 py-2 fw-semibold"
                onClick={() =>
                  contactRef.current.scrollIntoView({ behavior: "smooth" })
                }
              >
                Contact Me
              </button>

              <a
                href="https://drive.google.com/file/d/1RAUYZdP-tHlYlEf-J9kbn8qZZte4S98e/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-outline-secondary px-4 py-2 fw-semibold"
              >
                Resume
              </a>
            </div>
          </div>

          <div className="col-lg-5 d-none d-lg-block"></div>
        </div>

       

          

          

        <div className="container mt-5">
          <h2 className="fw-bold mb-2 display-5" style={{ marginTop: "8rem" }}>
            Projects
          </h2>
          <h5 className="text-muted mt-4">
            I build solutions that solve real-world problems.
          </h5>

          <div
            style={{
              width: "137px",
              height: "4px",
              backgroundColor: "green",
              marginBottom: "3rem",
              marginTop: "1rem",
            }}
          ></div>

          <div className="row g-4 mb-5">
            <div className="col-lg-4 col-md-6 col-12">
              <div className="project-card">
                <img
                  src="https://res.cloudinary.com/di71zb4sb/image/upload/v1765014940/Screenshot_2025-12-06_at_3.23.24_PM_lupv0r.png"
                  alt="Lead Bridge CRM"
                  className="project-img"
                />
                <h4 className="mt-5 mb-3">Lead Bridge CRM</h4>
                <p className="text-muted small">
                  A CRM platform to manage leads, assign agents, track progress,
                  and visualize analytics with charts.
                </p>

                <p className="fw-semibold mb-1">Tech Stack:</p>
                <p className="text-muted small">MERN Stack</p>

                <a
                  href="https://github.com/diveshnikam/lead-bridge-crm-frontend.git"
                  className="project-link text-dark fw-bold d-flex align-items-center gap-2"
                  target="_blank"
                >
                  <i className="bi bi-code-slash fs-5"></i>
                  Frontend Code
                </a>

                <a
                  href="https://github.com/diveshnikam/lead-bridge-crm-backend.git"
                  className="project-link text-dark fw-bold d-flex align-items-center gap-2 mt-2"
                  target="_blank"
                >
                  <i className="bi bi-database-fill-gear fs-5"></i>
                  Backend Code
                </a>

                <a
                  href="https://lead-bridge-crm-frontend.vercel.app/"
                  className="project-link text-dark fw-bold d-flex align-items-center gap-2 mt-2"
                  target="_blank"
                >
                  <i className="bi bi-box-arrow-up-right fs-5"></i>
                  Live Demo
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="project-card">
                <img
                  src="https://res.cloudinary.com/di71zb4sb/image/upload/v1765014969/Screenshot_2025-12-06_at_3.24.30_PM_qpglkq.png"
                  alt="Next Step Ecommerce"
                  className="project-img"
                />
                <h4 className="mt-5 mb-3">Next Step – E-commerce</h4>
                <p className="text-muted small">
                  A shoe e-commerce platform with cart, filters, wishlist,
                  checkout, address management, and search functionality.
                </p>

                <p className="fw-semibold mb-1">Tech Stack:</p>
                <p className="text-muted small">MERN Stack</p>

                <a
                  href="https://github.com/diveshnikam/Next-Step-e-Commerce-Frontend.git"
                  className="project-link text-dark fw-bold d-flex align-items-center gap-2"
                  target="_blank"
                >
                  <i className="bi bi-code-slash fs-5"></i>
                  Frontend Code
                </a>

                <a
                  href="https://github.com/diveshnikam/Next-Step-Ecommerce-Backend.git"
                  className="project-link text-dark fw-bold d-flex align-items-center gap-2 mt-2"
                  target="_blank"
                >
                  <i className="bi bi-database-fill-gear fs-5"></i>
                  Backend Code
                </a>

                <a
                  href="https://next-step-e-commerce-frontend.vercel.app/"
                  className="project-link text-dark fw-bold d-flex align-items-center gap-2 mt-2"
                  target="_blank"
                >
                  <i className="bi bi-box-arrow-up-right fs-5"></i>
                  Live Demo
                </a>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 col-12">
              <div className="project-card">
                <img
                  src="https://res.cloudinary.com/di71zb4sb/image/upload/v1768982056/Screenshot_2026-01-21_at_1.08.59_PM_rv1mtl.png"
                  alt="TaskPilot"
                  className="project-img"
                />
                <h4 className="mt-5 mb-3">TaskPilot</h4>
                <p className="text-muted small">
                  Task management platform with teams/projects/tasks and JWT +
                  OTP-based signup/forgot password.
                </p>

                <p className="fw-semibold mb-1">Tech Stack:</p>
                <p className="text-muted small">MERN Stack</p>

                <a
                  href="https://github.com/diveshnikam/task-pilot-frontend.git"
                  className="project-link text-dark fw-bold d-flex align-items-center gap-2"
                  target="_blank"
                >
                  <i className="bi bi-code-slash fs-5"></i>
                  Frontend Code
                </a>

                <a
                  href="https://github.com/diveshnikam/task-pilot-backend.git"
                  className="project-link text-dark fw-bold d-flex align-items-center gap-2 mt-2"
                  target="_blank"
                >
                  <i className="bi bi-database-fill-gear fs-5"></i>
                  Backend Code
                </a>

                <a
                  href="https://task-pilot-frontend-alpha.vercel.app/app"
                  className="project-link text-dark fw-bold d-flex align-items-center gap-2 mt-2"
                  target="_blank"
                >
                  <i className="bi bi-box-arrow-up-right fs-5"></i>
                  Live Demo
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className="container mt-5 mb-5 pt-5">
          <h2 className="fw-bold mb-2 display-5">Tech Stack</h2>
          <h5 className="text-muted mt-4">My Development Toolkit</h5>

          <div
            style={{
              width: "150px",
              height: "4px",
              backgroundColor: "green",
              marginBottom: "3rem",
              marginTop: "1rem",
            }}
          ></div>

          <div className="row gy-4">
            <div className="col-lg-3 col-md-6 col-12 d-flex flex-column gap-3">
              <div className="skill-box">HTML</div>
              <div className="skill-box">CSS</div>
              <div className="skill-box">Bootstrap</div>
              <div className="skill-box">JavaScript</div>
              <div className="skill-box">React.js</div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 d-flex flex-column gap-3">
              <div className="skill-box">Node.js</div>
              <div className="skill-box">Express.js</div>
              <div className="skill-box">MongoDB</div>
              <div className="skill-box">Mongoose</div>
              <div className="skill-box">Postman</div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 d-flex flex-column gap-3">
              <div className="skill-box">Git</div>
              <div className="skill-box">GitHub</div>
              <div className="skill-box">Chrome DevTools</div>
              <div className="skill-box">JWT Authentication</div>
              <div className="skill-box">TypeScript</div>
            </div>

            <div className="col-lg-3 col-md-6 col-12 d-flex flex-column gap-3">
              <div className="skill-box">React Router</div>
              <div className="skill-box">Context API</div>
              <div className="skill-box">REST APIs</div>
              <div className="skill-box">Socket.io</div>
              <div className="skill-box">Redux Toolkit</div>
            </div>
          </div>
        </div>

        <div className="container mt-5 pt-5" ref={contactRef}>
          <h2 className="fw-bold mb-2 display-5">Connect</h2>
          <h5 className="text-muted mt-4">
            Let’s collaborate to turn ideas into reliable, scalable solutions.
          </h5>

          <div
            style={{
              width: "145px",
              height: "4px",
              backgroundColor: "green",
              marginBottom: "3rem",
              marginTop: "1rem",
            }}
          ></div>

          <div className="row g-4 mb-5">
            <div className="col-md-6 col-12">
              <a
                href="mailto:divesh.nikam@gmail.com"
                className="connect-box-link"
              >
                <div className="connect-box">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <i className="bi bi-envelope-fill connect-icon"></i>
                    <h4 className="m-0">Email</h4>
                  </div>
                  <p className="text-muted mb-0">divesh.nikam@gmail.com</p>
                </div>
              </a>
            </div>

           

            <div className="col-md-6 col-12">
              <a
                href="https://github.com/diveshnikam"
                target="_blank"
                rel="noopener noreferrer"
                className="connect-box-link"
              >
                <div className="connect-box">
                  <div className="d-flex align-items-center gap-3 mb-2">
                    <i className="bi bi-github connect-icon"></i>
                    <h4 className="m-0">GitHub</h4>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>

      <footer
        className="bg-body-tertiary text-dark p-3 text-center"
        style={{ marginTop: "8rem" }}
      >
        <h6 className="container mt-3">
          &copy; Divesh Nikam. All rights reserved.
        </h6>

        <div className="mt-3 d-flex justify-content-center gap-4">
          <a
            href="mailto:diveshn378@gmail.com "
            className="text-dark"
            style={{ fontSize: "1.5rem" }}
          >
            <i className="bi bi-envelope-fill"></i>
          </a>

          <a
            href="https://github.com/diveshnikam"
            target="_blank"
            rel="noopener noreferrer"
            className="text-dark"
            style={{ fontSize: "1.5rem" }}
          >
            <i className="bi bi-github"></i>
          </a>

          
        </div>
      </footer>
    </>
  );
}

export default App;