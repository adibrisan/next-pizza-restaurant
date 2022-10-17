import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";

import Button from "../../components/core/Button/Button";
import Input from "../../components/core/Input/Input";

import styles from "../../styles/Product.module.css";

const Product = () => {
  const [noPizza, setNoPizza] = useState(1);

  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    description:
      "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe hic animi illo ab, accusantium necessitatibus ipsam distinctio voluptate veniam earum suscipit fugit possimus praesentium quae magnam laboriosam harum! Ullam, obcaecati.",
  };

  const handleNoOfPizza = (e) => {
    setNoPizza(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Choose your pizza</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/pizza.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.pizzaImg}>
          <Image
            src="/img/pizza.png"
            alt="picked pizza"
            layout="responsive"
            width="500px"
            height="500px"
          />
        </div>
        <div className={styles.pizzaOptions}>
          <h1>{pizza.name}</h1>
          <h2>${pizza.price[0]}</h2>
          <div className={styles.description}>{pizza.description}</div>
          <div className={styles.size}>
            <h2>Choose the size</h2>
            <div className={styles.pizzaSizes}>
              <div className={styles.sizeContainer}>
                <div className={styles.category}>Small</div>
                <Image
                  src="/img/size.png"
                  alt="pizza size"
                  width="30p"
                  height="30px"
                />
              </div>
              <div className={styles.sizeContainer}>
                <div className={styles.category}>Medium</div>
                <Image
                  src="/img/size.png"
                  alt="pizza size"
                  width="50p"
                  height="50px"
                />
              </div>
              <div className={styles.sizeContainer}>
                <div className={styles.category}>Large</div>
                <Image
                  src="/img/size.png"
                  alt="pizza size"
                  width="70p"
                  height="70px"
                />
              </div>
            </div>
          </div>
          <div className={styles.additional}>
            <h2>Choose additional ingredients</h2>
            <div className={styles.additionContainer}>
              <input
                id="extra_cheese"
                type="checkbox"
                className={styles.checkbox}
              />
              <label className={styles.checkboxTitle} htmlFor="extra_cheese">
                Extra Cheese
              </label>
              <input
                id="extra_jalapenos"
                type="checkbox"
                className={styles.checkbox}
              />
              <label className={styles.checkboxTitle} htmlFor="extra_jalapenos">
                Extra Jalapenos
              </label>
              <input
                id="extra_mushrooms"
                type="checkbox"
                className={styles.checkbox}
              />
              <label className={styles.checkboxTitle} htmlFor="extra_mushrooms">
                Extra Mushrooms
              </label>
              <input
                id="extra_tomatoes"
                type="checkbox"
                className={styles.checkbox}
              />
              <label className={styles.checkboxTitle} htmlFor="extra_tomatoes">
                Extra tomatoes
              </label>
            </div>
          </div>
          <div className={styles.submit}>
            <Input type="number" value={noPizza} onChange={handleNoOfPizza} />
            <Button name="Add to Cart" />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;
