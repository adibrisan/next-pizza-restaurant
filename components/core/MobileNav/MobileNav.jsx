import React from "react";

import styles from "./MobileNav.module.css";

const MobileNav = ({ open, onClick }) => {
  return (
    <div className={styles.navContainer}>
      <input
        readOnly
        checked={open}
        onClick={onClick}
        type="checkbox"
        id="nav__toggle"
        className={styles.checkbox}
      />

      <label htmlFor="nav__toggle" className={styles.button}>
        <span className={styles.navIcon} />
      </label>
    </div>
  );
};

export default MobileNav;
