import React from "react";

import Navbar from "./Navbar";
import Footer from "./Footer";
import Slider from "./Slider";
import PizzaMenu from "./PizzaMenu";

import styles from "../styles/Layout.module.css";

const Layout = ({ children }) => {
  return (
    <div className={styles.layout}>
      <Navbar />
      <Slider />
      <PizzaMenu />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
