import React from "react";

import styles from "./Input.module.css";

const Input = ({ defaultStyle, number, ...props }) => {
  return (
    <div className={defaultStyle ? styles.default : styles.container}>
      <input {...props} />
    </div>
  );
};

export default Input;
