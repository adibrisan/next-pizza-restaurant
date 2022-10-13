import Head from "next/head";

import Slider from "../components/custom/Slider";
import PizzaMenu from "../components/custom/PizzaMenu";

import styles from "../styles/HomeLayout.module.css";

export default function Home() {
  return (
    <>
      <Head>
        <title>Chowder&apos;s pizza</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/pizza.ico" />
      </Head>
      <div className={styles.layout}>
        <Slider />
        <PizzaMenu />
      </div>
    </>
  );
}
