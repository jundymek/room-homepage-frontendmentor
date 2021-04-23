import React from "react";
import styles from "./Discover.module.scss";
import Arrows from "../arrows/Arrows";
import { useWindowWidth } from "../../customHooks/useWindowWidth";

const Discover = () => {
  const windowWidth = useWindowWidth();
  const areArrowsVisible = windowWidth > 1000;
  return (
    <div className={styles.discover}>
      <h2 className={styles.title}>Discover innovative ways to decorate</h2>
      <p className={styles.paragraph}>
        We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine
        form and function in bringing your vision to life. Create a room in your own style with our collection and make
        your property a reflection of you and what you love.
      </p>
      <a href="/#" className={styles.link}>
        Shop now
      </a>
      {areArrowsVisible && <Arrows />}
    </div>
  );
};

export default Discover;
