import React from "react";

import PizzaCard from "./PizzaCard";

import styles from "../../styles/PizzaMenu.module.css";

const PizzaMenu = () => {
  return (
    <div className={styles.container}>
      <h1>Best pizza in Timisoara</h1>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
        nesciunt accusantium veniam inventore? Itaque laborum error odio,
        possimus adipisci, officia excepturi nesciunt esse voluptatem nobis
        earum velit illum laboriosam harum!
      </p>
      <div className={styles.pizzaList}>
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
        <PizzaCard />
      </div>
    </div>
  );
};

export default PizzaMenu;
