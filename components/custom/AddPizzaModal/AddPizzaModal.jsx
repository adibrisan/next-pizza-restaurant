import { useFormik } from "formik";
import { useState, useEffect } from "react";

import Backdrop from "../Backdrop/Backdrop";
import Button from "../../core/Button/Button";
import Input from "../../core/Input/Input";

import { addModalValidationSchema } from "../../../validation/addModalValidation";

import styles from "./AddPizzaModal.module.css";
import axios from "axios";

const AddPizzaModal = (props) => {
  const [file, setFile] = useState(null);
  const [extraOptions, setExtraOptions] = useState([]);
  const modalTitle = props.pizzaItem ? "Edit Pizza" : "Add a new Pizza";

  const formData = {
    title: "",
    description: "",
    price1: 0,
    price2: 0,
    price3: 0,
    extra: "",
    extraPrice: 0,
  };

  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    setFieldValue,
    setFieldTouched,
  } = useFormik({
    initialValues: formData,
    validationSchema: addModalValidationSchema,
    validateOnMount: true,
  });

  useEffect(() => {
    if (props.pizzaItem) {
      setFieldValue("title", props.pizzaItem.title);
      setFieldValue("description", props.pizzaItem.description);
      setFieldValue("price1", props.pizzaItem.prices[0]);
      setFieldValue("price2", props.pizzaItem.prices[1]);
      setFieldValue("price3", props.pizzaItem.prices[2]);
      setExtraOptions([...props.pizzaItem.extra]);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [props.pizzaItem]);

  const changePrice = () => {
    const currentPrices = [];
    let index = 0;
    currentPrices[index++] = values.price1;
    currentPrices[index++] = values.price2;
    currentPrices[index] = values.price3;

    return currentPrices;
  };

  const handleExtraOptions = () => {
    setExtraOptions((prev) => [
      ...prev,
      { title: values.extra, price: values.extraPrice },
    ]);
  };

  const handleCreate = async () => {
    const { title, description } = values;
    const data = new FormData();

    data.append("file", file);
    data.append("upload_preset", "uploads");

    try {
      const uploadRes = await axios.post(
        `https://api.cloudinary.com/v1_1/${process.env.NEXT_PUBLIC_CLOUD_ID}/image/upload`,
        data
      );

      const { url } = uploadRes.data;

      const newPizza = {
        title,
        description,
        prices: changePrice(),
        extra: extraOptions,
        img: url,
      };
      if (!props.pizzaItem) {
        await axios.post(
          `${process.env.NEXT_PUBLIC_BASE_URL}/products`,
          newPizza
        );
      } else {
        const id = props.pizzaItem._id;
        await axios.put(
          `${process.env.NEXT_PUBLIC_BASE_URL}/products/${id}`,
          newPizza
        );
      }

      props.onCancel();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      {props.show && (
        <>
          <Backdrop onClick={props.onCancel} />
          <div className={styles.container}>
            <div className={styles.closeModal} onClick={props.onCancel}>
              X
            </div>
            <span className={styles.title}>{modalTitle}</span>
            <section className={styles.chooseImgContainer}>
              <label className={styles.label}>Choose an image</label>
              <input type="file" onChange={(e) => setFile(e.target.files[0])} />
            </section>
            <section className={styles.titleDescription}>
              <Input
                addModalStyle
                placeholder="Title"
                value={values.title}
                onChange={handleChange("title")}
                error={errors.title}
                touched={touched.title}
                onBlur={() => {
                  if (!touched.title) {
                    setFieldTouched("title", true);
                  }
                  handleBlur("title");
                }}
              />
              <textarea
                id="description"
                rows={4}
                placeholder="Description"
                type="text"
                value={values.description}
                onChange={handleChange("description")}
                onBlur={() => {
                  if (!touched.description) {
                    setFieldTouched("description", true);
                  }
                  handleBlur("description");
                }}
              />
              {errors.description && touched.description && (
                <label htmlFor="description">{errors.description}</label>
              )}
            </section>
            <section className={styles.prices}>
              <Input
                addModalStyle
                type="number"
                style={{ width: "100%" }}
                placeholder="Small"
                value={values.price1}
                onChange={handleChange("price1")}
                error={errors.price1}
                touched={touched.price1}
                onBlur={() => {
                  if (!touched.price1) {
                    setFieldTouched("price1", true);
                  }
                  handleBlur("price1");
                }}
              />
              <Input
                addModalStyle
                type="number"
                style={{ width: "100%" }}
                placeholder="Medium"
                value={values.price2}
                onChange={handleChange("price2")}
                error={errors.price2}
                touched={touched.price2}
                onBlur={() => {
                  if (!touched.price2) {
                    setFieldTouched("price2", true);
                  }
                  handleBlur("price2");
                }}
              />
              <Input
                addModalStyle
                type="number"
                style={{ width: "100%" }}
                placeholder="Large"
                value={values.price3}
                onChange={handleChange("price3")}
                error={errors.price3}
                touched={touched.price3}
                onBlur={() => {
                  if (!touched.price3) {
                    setFieldTouched("price3", true);
                  }
                  handleBlur("price3");
                }}
              />
            </section>
            <section className={styles.extra}>
              <label htmlFor="ingredient">Extra</label>
              <div className={styles.extraForm}>
                <Input
                  addModalStyle
                  id="ingredient"
                  style={{ width: "120px" }}
                  placeholder="Ingredient"
                  value={values.extra}
                  onChange={handleChange("extra")}
                />
                <Input
                  addModalStyle
                  type="number"
                  placeholder="Price"
                  value={values.extraPrice}
                  onChange={handleChange("extraPrice")}
                />
                {extraOptions.map((extraItem, index) => (
                  <span key={index} className={styles.text}>
                    {extraItem.title}
                  </span>
                ))}
                <Button
                  entity="&rarr;"
                  name="Add extra"
                  onClick={handleExtraOptions}
                />
              </div>
            </section>
            <Button
              isDisabled={!isValid}
              style={{ width: "100%", marginTop: "10px" }}
              simple
              name="Create"
              onClick={handleCreate}
            />
          </div>
        </>
      )}
    </>
  );
};

export default AddPizzaModal;
