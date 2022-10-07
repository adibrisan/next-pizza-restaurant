import Image from "next/image";
import React from "react";

import styles from "../styles/Navbar.module.css";

const Navbar = () => {
  return (
    <nav className={styles.container}>
      <div className={styles.navItem}>
        <div className={styles.callItem}>
          <Image
            src="/img/telephone.png"
            alt="call image"
            width="32"
            height="32"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order now</div>
          <div className={styles.text}>0333 333 333</div>
        </div>
      </div>
      <div className={styles.navItem}>
        <ul className={styles.navList}>
          <li className={styles.listItem}>Home</li>
          <li className={styles.listItem}>Products</li>
          <li className={styles.listItem}>Menu</li>
          <Image
            src="/img/logo.png"
            alt="logo image"
            width="160px"
            height="69px"
          />
          <li className={styles.listItem}>Events</li>
          <li className={styles.listItem}>Blog</li>
          <li className={styles.listItem}>Contact</li>
        </ul>
      </div>
      <div className={styles.navItem}>
        <div className={styles.cart}>
          <Image
            src="/img/cart.png"
            alt="logo image"
            width="30px"
            height="30px"
          />
          <div className={styles.counter}>2</div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
