import React from "react";

import PizzaCard from "./PizzaCard";

import styles from "../../styles/PizzaMenu.module.css";

const PizzaMenu = ({ pizzaMenu }) => {
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
        {pizzaMenu.map((pizza) => (
          <PizzaCard key={pizza._id} pizzaDetails={pizza} />
        ))}
      </div>
    </div>
  );
};

export default PizzaMenu;
