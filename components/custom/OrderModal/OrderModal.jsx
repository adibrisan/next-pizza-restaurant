import { useFormik } from "formik";

import Backdrop from "../Backdrop/Backdrop";
import Button from "../../core/Button/Button";
import Input from "../../core/Input/Input";

import { cashModalValidationSchema } from "../../../validation/cashModalValidation";

import styles from "./OrderModal.module.css";

const OrderModal = (props) => {
  const formData = {
    customer: "",
    phone: "",
    address: "",
  };

  const {
    values,
    errors,
    touched,
    isValid,
    handleChange,
    handleBlur,
    setFieldTouched,
  } = useFormik({
    initialValues: formData,
    validationSchema: cashModalValidationSchema,
    validateOnMount: true,
  });

  const submitCashOrder = () => {
    props.createOrder({
      customer: values.customer,
      address: values.address,
      phone: values.phone,
      total: props.total,
      method: 0,
    });
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
            <span className={styles.title}>
              You will have to pay ${props.total} after delivery.
            </span>

            <Input
              defaultStyle
              placeholder="Name Surname"
              value={values.customer}
              onChange={handleChange("customer")}
              error={errors.customer}
              touched={touched.customer}
              onBlur={() => {
                if (!touched.customer) {
                  setFieldTouched("customer", true);
                }
                handleBlur("customer");
              }}
            />
            <Input
              defaultStyle
              placeholder="Phone"
              value={values.phone}
              onChange={handleChange("phone")}
              error={errors.phone}
              touched={touched.phone}
              onBlur={() => {
                if (!touched.phone) {
                  setFieldTouched("phone", true);
                }
                handleBlur("phone");
              }}
            />
            <div className={styles.addressContainer}>
              <textarea
                id="address"
                rows={4}
                placeholder="Your address"
                type="text"
                value={values.address}
                onChange={handleChange("address")}
                onBlur={() => {
                  if (!touched.address) {
                    setFieldTouched("address", true);
                  }
                  handleBlur("address");
                }}
              />
              {errors.address && touched.address && (
                <label className={styles.addressError} htmlFor="address">
                  {errors.address}
                </label>
              )}
            </div>
            <Button
              entity="&rarr;"
              isDisabled={!isValid || props.total === 0}
              simple
              name="Order"
              onClick={submitCashOrder}
            />
          </div>
        </>
      )}
    </>
  );
};

export default OrderModal;
