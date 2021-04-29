import React from "react";
import { useWindowWidth } from "../../customHooks/useWindowWidth";
import Arrows from "../arrows/Arrows";
import styles from "./Slider.module.scss";
import logo from "../../images/logo.svg";
import hamburger from "../../images/icon-hamburger.svg";
import iconClose from "../../images/icon-close.svg";
import clsx from "clsx";
import { useSliderImage } from "../../context/slidersContext";
import { useMobileMenu } from "../../context/mobileMenuContext";
import Navigation from "../navigation/Navigation";

const Slider = () => {
  const windowWidth = useWindowWidth();
  const areArrowsVisible = windowWidth <= 1000;

  const { isMobileMenuOpen, setIsMobileMenuOpen } = useMobileMenu();

  const { slideNr } = useSliderImage();

  const handleToggleMenuOpen = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const sliderStyle = clsx(`${styles.slider}`, styles[`bg${slideNr}`]);
  const titleStyles = clsx(`${styles.title}`, isMobileMenuOpen && windowWidth < 1000 && `${styles.hide}`);
  const menuWrapperSyles = clsx(
    `${styles.navWrapper}`,
    isMobileMenuOpen && windowWidth < 1000 && `${styles.navWrapperMobileOpen}`
  );
  return (
    <section className={sliderStyle}>
      <div className={menuWrapperSyles}>
        <button className={styles.hamburger} onClick={handleToggleMenuOpen}>
          {!isMobileMenuOpen ? (
            <img src={hamburger} alt="" width="24" height="14" />
          ) : (
            <img src={iconClose} alt="" width="24" height="24" />
          )}
        </button>
        <h1 className={titleStyles}>
          <img src={logo} alt="Room logo" width="62" height="14" />
        </h1>
        <Navigation />
      </div>
      {areArrowsVisible && <Arrows />}
    </section>
  );
};

export default Slider;
