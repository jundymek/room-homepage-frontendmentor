import React from "react";
import styles from "./Arrows.module.scss";
import arrowLeft from "../../images/icon-angle-left.svg";
import arrowRight from "../../images/icon-angle-right.svg";
import { useSliderImage } from "../../context/slidersContext";
import { useWindowWidth } from "../../customHooks/useWindowWidth";

const Arrows = () => {
  const { handleChangeSlide } = useSliderImage();
  const windowWidth = useWindowWidth();
  const arrowWidth = windowWidth < 1000 ? "10" : "15";
  const arrowHeight = windowWidth < 1000 ? "15" : "25";

  return (
    <div className={styles.arrows}>
      <button className={styles.button} onClick={() => handleChangeSlide("left")}>
        <img src={arrowLeft} alt="" className="arrow" width={arrowWidth} height={arrowHeight} />
      </button>
      <button className={styles.button} onClick={() => handleChangeSlide("right")}>
        <img src={arrowRight} alt="" width={arrowWidth} height={arrowHeight} />
      </button>
    </div>
  );
};

export default Arrows;
