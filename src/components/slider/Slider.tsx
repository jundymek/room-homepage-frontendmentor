import React from "react";
import styles from "./Slider.module.scss";

const Slider = () => {
  return (
    <section className={styles.slider}>
      <div className={styles.navWrapper}>
        <h1 className={styles.title}>room</h1>
        <nav className={styles.nav}>
          <ul className={styles.navList}>
            <li className={styles.navListItem}>home</li>
            <li className={styles.navListItem}>shop</li>
            <li className={styles.navListItem}>about</li>
            <li className={styles.navListItem}>contact</li>
          </ul>
        </nav>
      </div>
    </section>
  );
};

export default Slider;
