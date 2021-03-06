import React from "react";
import styles from "./About.module.scss";

const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.pictureDark}></div>
      <div className={styles.about}>
        <h3 className={styles.title}>About our furniture</h3>
        <p className={styles.paragraph}>
          Our multifunctional collection blends design and function to suit your individual taste. Make each room
          unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture
          pieces you need, from traditional to contemporary styles or anything in between. Product specialists are
          available to help you create your dream space.
        </p>
      </div>
      <div className={styles.pictureLight}></div>
    </div>
  );
};

export default About;
