import React from "react";
import styles from "../Projects/ProjectsStyles.module.css";
import viberr from "../../assets/viberr.png";
import cloud from "../../assets/clou-d.png";
import asl from "../../assets/asl-app.png";
import notes from "../../assets/sticky-notes.png"
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
          projectDesc={"Application to Determine ASL Gestures"}
        />
        <ProjectCard
          src={viberr}
          link="https://github.com/saicherishpotluri/SimpleStreamPlayer"
          projectName={"Streemz"}
          projectDesc={"Simple Stream Player using HLS Technology"}
        />
        <ProjectCard
          src={notes}
          link="https://github.com/saicherishpotluri/stickyNotes-React"
          projectName={"Sticky Notes"}
          projectDesc={"Simple Sticky Notes application using ReactJS"}
        />
      </div>
    </section>
  );
}

export default Projects;
