import React from "react";
import styles from "./Arrows.module.scss";
import arrowLeft from "../../images/icon-angle-left.svg";
import arrowRight from "../../images/icon-angle-right.svg";
import { useSliderImage } from "../../context/slidersContext";

const Arrows = () => {
  const { handleChangeSlide } = useSliderImage();

  return (
    <div className={styles.arrows}>
      <button className={styles.button} onClick={() => handleChangeSlide("left")}>
        <img src={arrowLeft} alt="" />
      </button>
      <button className={styles.button} onClick={() => handleChangeSlide("right")}>
        <img src={arrowRight} alt="" />
      </button>
    </div>
  );
};

export default Arrows;
