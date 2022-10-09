import React, { useState } from "react";
import Image from "next/image";

import styles from "../../styles/Slider.module.css";

const Slider = () => {
  const [slidePosition, setSlidePosition] = useState(0);

  const featuredImgs = [
    "/img/featured.png",
    "/img/featured2.png",
    "/img/featured3.png",
  ];

  const handleArrow = (direction) => {
    if (direction === "left") {
      setSlidePosition(slidePosition !== 0 ? slidePosition - 1 : 2);
    } else if (direction === "right") {
      setSlidePosition(slidePosition !== 2 ? slidePosition + 1 : 0);
    }
  };
  console.log(slidePosition);

  return (
    <div className={styles.container}>
      <div className={styles.left} onClick={() => handleArrow("left")}>
        <Image
          src="/img/arrowl.png"
          alt="arrow left"
          width="55px"
          height="55px"
          loading="lazy"
        />
      </div>

      <div
        style={{ transform: `translateX(${-100 * slidePosition}vw)` }}
        className={styles.imgWrapper}
      >
        {featuredImgs.map((img, index) => (
          <div key={index} className={styles.imgSection}>
            <Image
              src={img}
              alt="featured image"
              layout="fill"
              objectFit="contain"
              loading="lazy"
            />
          </div>
        ))}
      </div>
      <div className={styles.right} onClick={() => handleArrow("right")}>
        <Image
          src="/img/arrowr.png"
          alt="arrow right"
          width="55px"
          height="55px"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default Slider;
