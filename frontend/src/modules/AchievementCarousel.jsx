import "@google/model-viewer";
import React, { useState } from "react";
import "./AchievementCarousel.css";
import ana from "../assets/achievements/ana.jpeg";
import eolsen from "../assets/achievements/eolsen.jpg";
import janiston from "../assets/achievements/janiston.png";
import katew from "../assets/achievements/kate-winslet.jpg";
import scarlet from "../assets/achievements/sjohansson.jpg";
import sydney from "../assets/achievements/sydney-sweeney.jpg";
import drone from "../assets/drone.jpg";
import uni from "../assets/university-logo.png";
import cmpy from "../assets/G.png";
import ssip from "../assets/associations/as4-new.png";
const achievements = [
  
  {
    projectName: "Fire in HollyWood 2",
    grantAmount: "250,000",
    details:
      "USP: Our 3D printing program offers an exciting opportunity to explore the world of additive manufacturing. Whether you're a beginner or an experienced designer, you'll learn how to create prototypes, models, and even end-use products using cutting-edge 3D printers.",
    students: [
      { name: "Jennifer Aniston", imageUrl: janiston },
      { name: "Elizabeth Olsen", imageUrl: eolsen },
      { name: "Ana de Armas", imageUrl: ana },
      { name: "Kate Winslet", imageUrl: katew },
      { name: "Scarlett Johansson", imageUrl: scarlet },
      { name: "Sydney Sweeney", imageUrl: sydney },
    ],
  },
  {
    projectName: "Fire in HollyWood",
    grantAmount: "250,000",
    details:
      "USP: Our 3D printing program offers an exciting opportunity to explore the world of additive manufacturing. Whether you're a beginner or an experienced designer, you'll learn how to create prototypes, models, and even end-use products using cutting-edge 3D printers.",
    students: [
      { name: "Jennifer Aniston", imageUrl: janiston },
      { name: "Elizabeth Olsen", imageUrl: eolsen },
      { name: "Ana de Armas", imageUrl: ana },
      { name: "Kate Winslet", imageUrl: katew },
      { name: "Scarlett Johansson", imageUrl: scarlet },
      { name: "Sydney Sweeney", imageUrl: sydney },
    ],
  },
  
];

const AchievementCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % achievements.length);
  };

  const handlePrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + achievements.length) % achievements.length
    );
  };

  return (
    <div className="ac">
      <h1 className="main-heading">Explore Our Programs</h1>

      <div className="drone">
        <div className="drone-content">
          <div className="drone-i">
            <img src={drone} alt="Drone" />
          </div>
          <div className="drone-text">
            <h2>Learn Building Drones</h2>
            <p>
              Our 3D printing program offers an exciting opportunity to explore
              the world of additive manufacturing. Whether you're a beginner or
              an experienced designer, you'll learn how to create prototypes,
              models, and even end-use products using cutting-edge 3D printers.
            </p>
            <p>
              In this course, you'll gain hands-on experience with the latest
              technologies, software, and design principles, all while creating
              unique and functional items.
            </p>
          </div>
        </div>
      </div>

      <div className="printing">
        <div className="printing-content">
          <div className="printing-text">
            <h2>Learn 3D Printing</h2>
            <p>
              Our 3D printing program offers an exciting opportunity to explore
              the world of additive manufacturing. Whether you're a beginner or
              an experienced designer, you'll learn how to create prototypes,
              models, and even end-use products using cutting-edge 3D printers.
            </p>
            <p>
              In this course, you'll gain hands-on experience with the latest
              technologies, software, and design principles, all while creating
              unique and functional items.
            </p>
          </div>

          <div className="printing-model">
            <model-viewer
              src="https://modelviewer.dev/shared-assets/models/Astronaut.glb"
              alt="Astronaut"
              auto-rotate
              camera-controls
              background-color="#f0f0f0"
              style={{
                width: "100%",
                height: "400px",
                
              }}
            ></model-viewer>
          </div>
        </div>
      </div>

      <div className="achievement-carousel">
        <button className="carousel-btn prev" onClick={handlePrev}>
          &#10094;
        </button>

        <div className="achievement-card">
          <div className="project-header">
            <div className="uni">
              <img src={uni} alt="University Logo" />
            </div>
            <h3>{achievements[currentIndex].projectName}</h3>
            <div className="cmpy">
              <img src={cmpy} alt="Company Logo" />
            </div>
          </div>

          <p>
            Grant Amount:{" "}
            <strong>₹{achievements[currentIndex].grantAmount}</strong>
          </p>
          <p className="details">{achievements[currentIndex].details}</p>

          
          <div className="students">
            {achievements[currentIndex].students.map((student, index) => (
              <div key={index} className="student">
                <img
                  src={student.imageUrl}
                  alt={student.name}
                  className="student-image"
                />
                <p className="student-name">{student.name}</p>
              </div>
            ))}
          </div>
        </div>

        <button className="carousel-btn next" onClick={handleNext}>
          &#10095;
        </button>
      </div>
    </div>
  );
};

export default AchievementCarousel;
