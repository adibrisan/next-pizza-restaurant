import React from "react";

import styles from "./Input.module.css";

const Input = ({
  defaultStyle,
  number,
  error,
  touched,
  addModalStyle,
  ...props
}) => {
  return (
    <div className={defaultStyle ? styles.default : styles.container}>
      <input {...props} />
      {error && touched && (
        <span className={addModalStyle ? styles.addError : styles.error}>
          {error}
        </span>
      )}
    </div>
  );
};

export default Input;
