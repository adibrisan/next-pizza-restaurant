import Image from "next/image";
import Link from "next/link";
import React from "react";

import truncateCharCount from "../../utils/truncateString";

import styles from "../../styles/PizzaCard.module.css";

const PizzaCard = ({ pizzaDetails }) => {
  return (
    <Link href={`/product/${pizzaDetails._id}`}>
      <div className={styles.container}>
        <div className={styles.imgWrapper}>
          <Image
            src={pizzaDetails.img}
            alt="pizza item"
            width="150px"
            height="150px"
            loading="lazy"
          />
        </div>
        <h1 className={styles.pizzaTitle}>{pizzaDetails.title}</h1>
        <h2 className={styles.pizzaPrice}>{pizzaDetails.prices[1]} $</h2>
        <p className={styles.pizzaDescription}>
          {truncateCharCount(`${pizzaDetails.description}`, 90)}
        </p>
      </div>
    </Link>
  );
};

export default PizzaCard;
