import React from "react";

import styles from "./MobileNav.module.css";

const MobileNav = ({ onClick }) => {
  return (
    <div onClick={onClick} className={styles.navContainer}>
      <span className={styles.navIcon} />
    </div>
  );
};

export default MobileNav;
