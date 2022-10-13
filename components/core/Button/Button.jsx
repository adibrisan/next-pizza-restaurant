import React from "react";
import Link from "next/link";

import styles from "./Button.module.css";

const Button = ({ name, link, href }) => {
  return (
    <>
      {link ? (
        <Link href={link ? "href" : "#"}>
          <a className={styles.btn_link}>{name}</a>
        </Link>
      ) : (
        <button>{name}</button>
      )}
    </>
  );
};

export default Button;
