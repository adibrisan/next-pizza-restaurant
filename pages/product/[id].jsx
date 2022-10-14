import React from "react";

import styles from "../../styles/Product.module.css";

const Product = () => {
  const pizza = {
    id: 1,
    img: "/img/pizza.png",
    name: "CAMPAGNOLA",
    price: [19.9, 23.9, 27.9],
    desc: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Saepe hic animi illo ab, accusantium necessitatibus ipsam distinctio voluptate veniam earum suscipit fugit possimus praesentium quae magnam laboriosam harum! Ullam, obcaecati.",
  };

  return <div className={styles.container}></div>;
};

export default Product;
