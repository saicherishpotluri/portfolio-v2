import React from "react";
import styles from "../Projects/ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import cloud from "../../assets/clou-d.png";
import asl from "../../assets/asl-app.png";
import notes from "../../assets/sticky-notes.png";
import dataAnalysis from "../../assets/data-analysis.png";
import aiImgGen from "../../assets/aiImgGen.png";
import ProjectCard from "../../common/ProjectCard";
function Projects() {
  return (
    <section id="project" className={styles.container}>
      <h1 className="sectionTitle">Projects</h1>
      <div className={styles.projectsContainer}>
        <ProjectCard
          src={cloud}
          link="https://github.com/saicherishpotluri/Weather-App"
          projectName={"Clou-D"}
          projectDesc={"Weather Forecast Application"}
        />
        <ProjectCard
          src={asl}
          link="https://github.com/saicherishpotluri/Extracting-Brain-Boundaries-from-rs-fMRI-data"
          projectName={"ASL Gesture App"}
          projectDesc={"ASL Gesture Recognition"}
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/saicherishpotluri/SimpleStreamPlayer"
          projectName={"Streemz"}
          projectDesc={"Streaming using HLS Technology"}
        />
        <ProjectCard
          src={notes}
          link="https://github.com/saicherishpotluri/stickyNotes-React"
          projectName={"Sticky Notes"}
          projectDesc={"Sticky Notes App using ReactJS"}
        />
        <ProjectCard
          src={dataAnalysis}
          link="https://github.com/saicherishpotluri/Analyze-Data-with-Amazon-QuickSight"
          projectName={"Data Analysis"}
          projectDesc={"Data Analysis using Quicksight"}
        />
        <ProjectCard
          src={aiImgGen}
          link="https://github.com/saicherishpotluri/image-reconition-app"
          projectName={"AI Image Analyzer"}
          projectDesc={"Image Analysis using Gemini"}
        />
      </div>
    </section>
  );
}

export default Projects;
