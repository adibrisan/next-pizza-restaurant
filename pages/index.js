import axios from "axios";
import Head from "next/head";

import Slider from "../components/custom/Slider";
import PizzaMenu from "../components/custom/PizzaMenu";

import styles from "../styles/HomeLayout.module.css";

export default function Home({ pizzaMenu }) {
  return (
    <>
      <Head>
        <title>Chowder&apos;s pizza</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/pizza.ico" />
      </Head>
      <div className={styles.layout}>
        <Slider />
        <PizzaMenu pizzaMenu={pizzaMenu} />
      </div>
    </>
  );
}

export const getServerSideProps = async () => {
  const res = await axios.get("http://localhost:3000/api/products");

  return {
    props: {
      pizzaMenu: res.data,
    },
  };
};
