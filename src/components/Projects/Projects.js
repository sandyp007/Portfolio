import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import todo from "../../Assets/Projects/todo.png";
import chatify from "../../Assets/Projects/chatify.png";
import weather from "../../Assets/Projects/weather.png";
import portfolio from "../../Assets/Projects/portfolio.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Chatify"
              description="Personal Chat Room or Workspace to share resources and hangout with friends build with react.js and Firebase. Have features which allows user for realtime messaging, image sharing as well as supports reactions on messages."
              ghLink="https://github.com/sandyp007/ChatifyFrontend.git"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="Task Manager"
              description="A to-do list is a helpful tool for organizing and prioritizing tasks and activities. It can be tailored to your specific needs and can include any tasks or goals you want to accomplish. "
              ghLink="https://github.com/sandyp007/ToDo.git"
              demoLink="https://taskforu.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Live Weather"
              description="The Live Weather Forecast Application is a dynamic web-based tool designed to provide users with real-time weather updates and forecasts. Leveraging modern web technologies and APIs, this project delivers accurate weather information in an intuitive and user-friendly interface. "
              ghLink="https://github.com/sandyp007/ToDo.git"
              demoLink="https://weathernear.vercel.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={portfolio}
              isBlog={false}
              title="Personal Portfolio"
              description="A portfolio website is a unique way to showcase your work and let others know about yourself. It’s like an evergreen platform for your projects, case studies, and information about you. In addition, it’s one of the best ways to express your personality, experience, and capabilities. "
              ghLink="https://github.com/sandyp007/ToDo.git"
              demoLink="https://aboutmee.vercel.app/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
