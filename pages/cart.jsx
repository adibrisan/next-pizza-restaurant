import React from "react";
import Head from "next/head";
import Image from "next/image";

import styles from "../styles/Cart.module.css";
import Button from "../components/core/Button/Button";

const Cart = () => {
  return (
    <>
      <Head>
        <title>Your order</title>
        <meta name="order" content="Order details" />
        <link rel="icon" href="/pizza.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.pizzaOrders}>
          <table className={styles.tableContainer}>
            <tbody>
              <tr className={styles.row}>
                <th>Product</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Quantity</th>
                <th>Price</th>
                <th>Total</th>
              </tr>
              <tr>
                <td>
                  <div className={styles.imgContainer}>
                    <Image
                      src="/img/pizza.png"
                      alt="ordered pizza"
                      layout="fill"
                      objectFit="cover"
                      priority
                    />
                  </div>
                </td>
                <td>
                  <span className={styles.pizzaName}>Buffalo</span>
                </td>
                <td>
                  <span className={styles.extras}>
                    Double ingredient,extra jalapenos
                  </span>
                </td>
                <td>
                  <span className={styles.pizzaPrice}>$19.90</span>
                </td>
                <td>
                  <span className={styles.pizzaQuantity}>2</span>
                </td>
                <td>
                  <span className={styles.pizzaTotal}>$39.80</span>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className={styles.cartOrder}>
          <div className={styles.cartWrapper}>
            <h2 className={styles.title}>Cart total</h2>
            <div className={styles.lastDetails}>
              <b>Subtotal:</b> $79.60
            </div>
            <div className={styles.lastDetails}>
              <b>Discount:</b> $0.00
            </div>
            <div className={styles.lastDetails}>
              <b>Total:</b> $79.60
            </div>
          </div>
          <Button name="Checkout order" className={styles.checkoutBtn} />
        </div>
      </div>
    </>
  );
};

export default Cart;
