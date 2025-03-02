import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              title="Crypto Casino"
              description="This decentralized crypto casino lets users play without registration by connecting their wallets directly. It features its own token for gameplay, enabling trading and seamless transactions. The project promotes anonymity, 
              security, and flexibility, setting it apart from traditional casinos while embracing blockchain innovation.."
              ghLink="https://github.com/Kartik-Patil/Crypto-Casino"
             demoLink="https://drive.google.com/file/d/1qU4K304BHaCXbzAeoLkmcQ9T-_M1ufZA/view?usp=sharing"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Auto-MLOps"
              description="This project builds a scalable AutoML-MLOps platform automating the entire ML lifecycle. It streamlines data preprocessing, model selection, training, and deployment, simplifying complex processes. 
              The platform ensures efficiency, scalability, and ease of use, enabling seamless machine learning automation for diverse applications."
              ghLink="https://github.com/Kartik-Patil/AutoML-ops"
             demoLink="https://drive.google.com/file/d/1ZeGOzezpCRcAazm3pnW7c2wqNeHG8XZe/view?usp=sharing "
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Impact Bridge"
              description="Web application bridging NGOs and philanthropists to eradicate poverty. It connects donors with organizations, fostering collaboration and transparency. By streamlining communication and providing real-time updates, 
              it empowers users to contribute effectively, ensuring resources reach those in need and driving impactful change in poverty alleviation."
              ghLink="https://github.com/Kartik-Patil/NGO-Philantropy-PAC-Hack"
             demoLink="https://www.youtube.com/watch?v=hzYXz35jiV0"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={leaf}
              isBlog={false}
              title="Doctor Patient Portal"
              description="the Doctor Patient Portal, a comprehensive web platform designed to bridge the gap between healthcare providers and patients, 
              streamline healthcare services, and improve overall health outcomes,by which a patient can book and view appointments"
              ghLink="https://github.com/Kartik-Patil/Doctor-Patient-Portal"
             demoLink="https://youtu.be/DbLfRxBmYOc"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={suicide}
              isBlog={false}
              title="Image Inpainting"
              description="Image inpainting tackles challenges in restoration, creation, and medical imaging. Traditional methods falter in complex scenes; integrating YOLOv8 for precise detection and LaMa for generative inpainting enhances quality and efficiency. 
              YOLOv8 masks regions, while LaMa generates context-aware content. This hybrid approach achieves remarkable results."
              ghLink="https://github.com/Kartik-Patil/Image_Inpainting"
              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Cervical Cancer Image Classification"
              description="This study evaluates an ensemble method combining five deep learning models—ResNet50V2, DenseNet-169, DenseNet-121, InceptionNetV2, and XceptionNet—for a complex classification task, achieving 99.71% accuracy. The ensemble leverages complementary model strengths, improving accuracy and generalization. The models excel in detecting subtle patterns and enhancing diagnostic capabilities, making them ideal for medical imaging tasks. Future work will focus on optimizing ensemble strategies and real-time prediction systems for broader applications"
              ghLink="https://github.com/Kartik-Patil/Cervical-Cancer-Image-Classification"
                   
            />
          </Col>

          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="CerviCare"
              description="This project is a website which deploys an ensemble method combining five deep learning models for a complex diagnosis task of Cervical Cancer, achieving 99.86% accuracy. The models excel in detecting subtle patterns and enhancing diagnostic capabilities, making them ideal for medical imaging tasks. Future work will focus on optimizing ensemble strategies and real-time prediction systems for broader applications"
              ghLink="https://github.com/Kartik-Patil/Cervical-Cancer-Image-Classification"
                   
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
