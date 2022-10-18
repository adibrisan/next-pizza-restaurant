import React from "react";
import Link from "next/link";

import styles from "./Button.module.css";

const Button = ({ name, className, link, href, ...props }) => {
  return (
    <>
      {link ? (
        <Link href={link ? "href" : "#"}>
          <a className={styles.btn_link}>{name}</a>
        </Link>
      ) : (
        <button className={className ? className : styles.btn} {...props}>
          {name} <div>&rarr;</div>
        </button>
      )}
    </>
  );
};

export default Button;
