import React from "react";
import clsx from "clsx";
import styles from "./Navigation.module.scss";
import { useMobileMenu } from "../../context/mobileMenuContext";
import { useWindowWidth } from "../../customHooks/useWindowWidth";

const Navigation = () => {
  const { isMobileMenuOpen } = useMobileMenu();
  const windowWidth = useWindowWidth();
  const navStyles = clsx(`${styles.nav}`, !isMobileMenuOpen && windowWidth < 1000 && `${styles.hide}`);
  return (
    <nav className={navStyles}>
      <ul className={styles.navList}>
        <li className={styles.navListItem}>
          <a href="/#">home</a>
        </li>
        <li className={styles.navListItem}>
          <a href="/#">shop</a>
        </li>
        <li className={styles.navListItem}>
          <a href="/#">about</a>
        </li>
        <li className={styles.navListItem}>
          <a href="/#">contact</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navigation;
