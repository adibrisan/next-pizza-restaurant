import { useState } from "react";

import Backdrop from "../Backdrop/Backdrop";
import Button from "../../core/Button/Button";
import Input from "../../core/Input/Input";

import styles from "./AddPizzaModal.module.css";

const AddPizzaModal = (props) => {
  const [file, setFile] = useState(null);
  const [title, setTitle] = useState(null);
  const [desc, setDesc] = useState(null);
  const [prices, setPrices] = useState([]);
  const [extraOptions, setExtraOptions] = useState([]);
  const [extra, setExtra] = useState(null);

  return (
    <>
      {props.show && (
        <>
          <Backdrop onClick={props.onCancel} />
          <div className={styles.container}>
            <div className={styles.closeModal} onClick={props.onCancel}>
              X
            </div>
            <span className={styles.title}>Add a new Pizza</span>
            <section className={styles.chooseImgContainer}>
              <label className={styles.label}>Choose an image</label>
              <input type="file" />
            </section>
            <section className={styles.titleDescription}>
              <Input placeholder="Title" />
              <textarea
                id="description"
                rows={4}
                placeholder="Description"
                type="text"
              />
              {/* {errors.address && touched.address && (
                <label className={styles.addressError} htmlFor="description">
                  {errors.address}
                </label>
              )} */}
            </section>
            <section className={styles.prices}>
              <Input style={{ width: "100%" }} placeholder="Small" />
              <Input style={{ width: "100%" }} placeholder="Medium" />
              <Input style={{ width: "100%" }} placeholder="Large" />
            </section>
            <section className={styles.extra}>
              <span>Extra</span>
              <div className={styles.extraForm}>
                <Input style={{ width: "120px" }} placeholder="Ingredient" />
                <Input
                  style={{ width: "120px", margin: "0 20px" }}
                  placeholder="Price"
                />
                <Button entity="&rarr;" name="Add" />
              </div>
            </section>
            <Button style={{ width: "100%" }} simple name="Create" />
          </div>
        </>
      )}
    </>
  );
};

export default AddPizzaModal;
