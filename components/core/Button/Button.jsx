import React from "react";
import Link from "next/link";

import styles from "./Button.module.css";

const Button = ({
  style,
  name,
  className,
  link,
  href,
  passHref,
  simple,
  isDisabled,
  ...props
}) => {
  return (
    <>
      {link ? (
        <Link href={link && href ? href : "#"} passHref>
          <a className={styles.btn_link}>{name}</a>
        </Link>
      ) : (
        <button
          style={style}
          disabled={isDisabled}
          className={className ? className : styles.btn}
          {...props}
        >
          {name} {!simple && <div>&rarr;</div>}
        </button>
      )}
    </>
  );
};

export default Button;
