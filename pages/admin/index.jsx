import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useState, useRef } from "react";

import AddPizzaModal from "../../components/custom/AddPizzaModal/AddPizzaModal";
import Button from "../../components/core/Button/Button";

import styles from "../../styles/Admin.module.css";

const Index = ({ orders, pizzaList }) => {
  const [productList, setProductList] = useState(pizzaList);
  const [orderList, setOrderList] = useState(orders);
  const [openEditModal, setOpenEditModal] = useState(false);
  const pizzaRef = useRef(null);
  const status = ["preparing", "on the way", "delivered"];

  const handleDelete = async (id) => {
    try {
      await axios.delete(
        `https://next-pizza-restaurant-tau.vercel.app/api/products/${id}`
      );
      setProductList(pizzaList.filter((pizza) => pizza._id !== id));
      console.log(`deleted ${id}`);
    } catch (err) {
      console.log(err);
    }
  };

  const handleStatus = async (id) => {
    const item = orderList.filter((order) => order._id === id)[0];
    const currentStatus = item.status;

    try {
      const res = await axios.put(
        `https://next-pizza-restaurant-tau.vercel.app/api/orders/${id}`,
        {
          status: currentStatus + 1,
        }
      );
      setOrderList([
        res.data,
        ...orderList.filter((order) => order._id !== id),
      ]); //update the list with the updated order and delete the old order
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Head>
        <title>Admin dashboard</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/pizza.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.products}>
          <h1 className={styles.title}>Products</h1>
          <table className={styles.tableContainer}>
            <tbody>
              <tr className={styles.row}>
                <th>Product image</th>
                <th>Id</th>
                <th>Title</th>
                <th>Price</th>
                <th>Action</th>
              </tr>
              {productList.map((pizza) => (
                <tr key={pizza._id}>
                  <td>
                    <div className={styles.imgContainer}>
                      <Image
                        src={pizza.img}
                        alt="ordered pizza"
                        layout="responsive"
                        width="60px"
                        height="60px"
                        objectFit="cover"
                        loading="lazy"
                      />
                    </div>
                  </td>
                  <td>
                    <span className={styles.pizzaId}>{pizza._id}</span>
                  </td>
                  <td className={styles.ptitle}>
                    <span className={styles.pizzaTitle}>{pizza.title}</span>
                  </td>
                  <td>
                    <span className={styles.pizzaPrice}>
                      ${pizza.prices[0]}
                    </span>
                  </td>
                  <td className={styles.actions}>
                    <Button
                      style={{ width: "60px", backgroundColor: "#83c5be" }}
                      simple
                      name="Edit"
                      onClick={() => {
                        pizzaRef.current = pizza;
                        setOpenEditModal(true);
                      }}
                    />
                    <div style={{ margin: "5px" }}></div>
                    <Button
                      style={{ width: "60px", backgroundColor: "#d2001a" }}
                      simple
                      name="Delete"
                      onClick={() => {
                        handleDelete(pizza._id);
                      }}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.orders}>
          <h1 className={styles.title}>Orders</h1>
          <table className={styles.tableContainer}>
            <tbody>
              <tr className={styles.row}>
                <th>Id</th>
                <th>Customer</th>
                <th>Total</th>
                <th>Payment</th>
                <th>Status</th>
                <th>Next Status Stage</th>
              </tr>
              {orderList.map((order) => (
                <tr key={order._id}>
                  <td>
                    <span className={styles.pizzaTitle}>{order._id}</span>
                  </td>
                  <td>
                    <span className={styles.pizzaId}>{order.customer}</span>
                  </td>
                  <td>
                    <span className={styles.pizzaTitle}>{order.total}</span>
                  </td>
                  <td>
                    <span className={styles.pizzaPrice}>{`${
                      order.method === 0 ? "cash" : "paid"
                    }`}</span>
                  </td>
                  <td>
                    <span className={styles.pizzaQuantity}>
                      {status[order.status]}
                    </span>
                  </td>
                  <td>
                    <Button
                      entity="&rarr;"
                      name="Next Stage"
                      onClick={() => handleStatus(order._id)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <AddPizzaModal
        pizzaItem={pizzaRef.current}
        show={openEditModal}
        onCancel={() => setOpenEditModal(false)}
      />
    </>
  );
};

export const getServerSideProps = async (context) => {
  const cookie = context.req?.cookies || "";

  if (cookie.token !== process.env.COOKIE_TOKEN) {
    return {
      redirect: {
        destination: "/admin/login",
        permanent: false,
      },
    };
  }

  const products = await axios.get(
    "https://next-pizza-restaurant-tau.vercel.app/api/products"
  );
  const orders = await axios.get(
    "https://next-pizza-restaurant-tau.vercel.app/api/orders"
  );

  return {
    props: {
      orders: orders.data,
      pizzaList: products.data,
    },
  };
};

export default Index;
