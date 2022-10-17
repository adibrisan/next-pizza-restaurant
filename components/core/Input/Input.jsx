import React from "react";

import styles from "./Input.module.css";

const Input = ({ number, ...props }) => {
  return (
    <div className={styles.container}>
      <input {...props} />
    </div>
  );
};

export default Input;
