import React from "react";
import styles from "./Arrows.module.scss";
import arrowLeft from "../../images/icon-angle-left.svg";
import arrowRight from "../../images/icon-angle-right.svg";

const Arrows = () => {
  return (
    <div className={styles.arrows}>
      <button className={styles.button}>
        <img src={arrowLeft} alt="" />
      </button>
      <button className={styles.button}>
        <img src={arrowRight} alt="" />
      </button>
    </div>
  );
};

export default Arrows;
