import Image from "next/image";
import React from "react";

import Button from "../core/Button/Button";

import styles from "../../styles/Navbar.module.css";

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
          <li className={styles.listItem}>
            <Button name="Home" link />
          </li>
          <li className={styles.listItem}>
            <Button name="Products" link />
          </li>
          <li className={styles.listItem}>
            <Button name="Menu" link />
          </li>
          <div className={styles.mainLogo}>
            <Image
              src="/img/logo.png"
              alt="logo image"
              width="350px"
              height="200px"
            />
          </div>
          <li className={styles.listItem}>
            <Button name="Events" link />
          </li>
          <li className={styles.listItem}>
            <Button name="Blog" link />
          </li>
          <li className={styles.listItem}>
            <Button name="Contact" link />
          </li>
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
          <div className={styles.counter}>
            <div className={styles.number}>2</div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
