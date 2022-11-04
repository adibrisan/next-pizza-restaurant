import React from "react";
import Image from "next/image";

import styles from "../../styles/Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.container}>
      <div className={styles.footerImg}>
        <Image
          src="/img/footer.jpeg"
          alt="footer img"
          layout="fill"
          objectFit="cover"
          loading="lazy"
        />
      </div>
      <h3 className={styles.footerTitle}>
        Oh yes, we did the Chowder&apos;s pizza, well baked slice of pizza.
      </h3>
      <div className={styles.addressContainer}>
        <h4>Find our restaurants</h4>
        <p className={styles.address}>
          1654 R. Don Road #304. NewYork, 85022 (602) 867&ndash;1010
        </p>
        <p className={styles.address}>
          2356 K. Laquie Rd #235. NewYork, 85022 (602) 867&ndash;1011
        </p>
        <p className={styles.address}>
          1614 E. Erwin St #104. NewYork, 85022 (602) 867&ndash;1012
        </p>
        <p className={styles.address}>
          1614 W. Caroll St #125. NewYork, 85022 (602) 867&ndash;1013
        </p>
      </div>
      <div className={styles.workContainer}>
        <h4>Working hours</h4>
        <p className={styles.address}>
          MONDAY UNTIL FRIDAY
          <br /> 9:00 &ndash; 22:00
        </p>
        <p className={styles.address}>
          SATURDAY - SUNDAY
          <br /> 12:00 &ndash; 24:00
        </p>
      </div>
    </div>
  );
};

export default Footer;
