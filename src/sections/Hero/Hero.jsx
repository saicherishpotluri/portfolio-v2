import React from "react";
import styles from "./HeroStyles.module.css";
import sun from "../../assets/sun.svg";
import moon from "../../assets/moon.svg";
import githubLight from "../../assets/github-light.svg";
import githubDark from "../../assets/github-dark.svg";
import linkedInLight from "../../assets/linkedin-light.svg";
import linkedInDark from "../../assets/linkedin-dark.svg";
import resume from "../../assets/Sai-Potluri-SDE-2YoE.pdf";
import dplite from "../../assets/dp-lite.png";
import dpdark from "../../assets/dp-dark.png";
import { useTheme } from "../../common/ThemeContext";

function Hero() {
  const { theme, toggleTheme } = useTheme();
  const themeIcon = theme === "light" ? sun : moon;
  const linkedInIcon = theme === "light" ? linkedInLight : linkedInDark;
  const githubIcon = theme === "light" ? githubLight : githubDark;
  const heroImg = theme === "light" ? dplite : dpdark;
  return (
    <section id="hero" className={styles.container}>
      {/* Hero Section Starts */}
      <div className={styles.colorModeContainer}>
        <img
          className={styles.hero}
          src={heroImg}
          alt="Profile picture of Sai Potluri"
        />
        <img
          src={themeIcon}
          alt="Color mode icon"
          className={styles.colorMode}
          onClick={toggleTheme}
        />
      </div>
      {/* Hero Section Ends */}

      {/* Info Section Starts */}
      <div className={styles.info}>
        <h1>
          Sai
          <br />
          Potluri
        </h1>
        <h2>Fullstack Developer</h2>
        <span>
          <a href="https://www.linkedin.com/in/spotluri" target="_blank">
            <img src={linkedInIcon} alt="LinkedIn Icon" />
          </a>
          <a href="https://github.com/saicherishpotluri" target="_blank">
            <img src={githubIcon} alt="GitHub Icon" />
          </a>
        </span>
        <p className={styles.description}>
          With a passion for developing modern and interactive web applications.
        </p>
        <a href={resume} download>
          <button className="hover">Resume</button>
        </a>
      </div>
    </section>
  );
}

export default Hero;
