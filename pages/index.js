import Head from "next/head";

import Slider from "../components/Slider";
import PizzaMenu from "../components/PizzaMenu";

import styles from "../styles/HomeLayout.module.css";

export default function Home() {
  return (
    <div className={styles.layout}>
      <Head>
        <title>Chowder&apos;s pizza</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/pizza.ico" />
      </Head>
      <Slider />
      <PizzaMenu />
    </div>
  );
}
