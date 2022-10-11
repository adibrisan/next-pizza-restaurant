import Image from "next/image";
import React from "react";

import truncateCharCount from "../../utils/truncateString";

import styles from "../../styles/PizzaCard.module.css";

const PizzaCard = ({ src, title, price, description }) => {
  return (
    <div className={styles.container}>
      <div className={styles.imgWrapper}>
        <Image
          src="/img/pizza.png"
          alt="pizza item"
          width="150px"
          height="150px"
        />
      </div>
      <h1 className={styles.pizzaTitle}>Buffalo</h1>
      <h2 className={styles.pizzaPrice}>Price $</h2>
      <p className={styles.pizzaDescription}>
        {truncateCharCount(
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus deleniti quas libero tenetur Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam delectus deleniti quas libero tenetur culpa recusandae corrupti excepturi,culpa recusandae corrupti excepturi,",
          90
        )}
      </p>
    </div>
  );
};

export default PizzaCard;
