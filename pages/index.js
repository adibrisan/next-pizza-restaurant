import axios from "axios";
import Head from "next/head";
import { useState } from "react";

import AddPizzaModal from "../components/custom/AddPizzaModal/AddPizzaModal";
import Slider from "../components/custom/Slider";
import PizzaMenu from "../components/custom/PizzaMenu";

import Button from "../components/core/Button/Button";

import styles from "../styles/HomeLayout.module.css";

export default function Home({ pizzaMenu, isAdmin }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <Head>
        <title>Chowder&apos;s pizza</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/pizza.ico" />
      </Head>
      <div className={styles.layout}>
        <Slider />
        {isAdmin && (
          <>
            <div className={styles.adminBtn}>
              <Button
                entity="&rarr;"
                style={{ marginLeft: "20px" }}
                name="Add pizza"
                onClick={() => setIsModalOpen(true)}
              />
            </div>

            <AddPizzaModal
              show={isModalOpen}
              onCancel={() => setIsModalOpen(false)}
            />
          </>
        )}
        <PizzaMenu pizzaMenu={pizzaMenu} />
      </div>
    </>
  );
}

export const getServerSideProps = async (context) => {
  const cookie = context.req?.cookies || "";
  let isAdmin = false;

  if (cookie.token === process.env.COOKIE_TOKEN) {
    isAdmin = true;
  }

  const res = await axios.get(
    "https://next-pizza-restaurant-tau.vercel.app/api/products"
  );

  return {
    props: {
      pizzaMenu: res.data,
      isAdmin,
    },
  };
};
