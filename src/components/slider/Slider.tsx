import React from "react";
import { useWindowWidth } from "../../customHooks/useWindowWidth";
import Arrows from "../arrows/Arrows";
import styles from "./Slider.module.scss";
import logo from "../../images/logo.svg";

const Slider = () => {
  const windowWidth = useWindowWidth();
  console.log(windowWidth);
  const areArrowsVisible = windowWidth <= 1000;
  return (
    <section className={styles.slider}>
      <div className={styles.navWrapper}>
        <h1 className={styles.title}>
          <img src={logo} alt="Room logo" />
        </h1>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>home</li>
            <li className={styles.navListItem}>shop</li>
            <li className={styles.navListItem}>about</li>
            <li className={styles.navListItem}>contact</li>
          </ul>
        </nav>
      </div>
      {areArrowsVisible && <Arrows />}
    </section>
  );
};

export default Slider;
