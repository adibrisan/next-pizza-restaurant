import { useState } from "react";

import Backdrop from "../Backdrop/Backdrop";
import Button from "../../core/Button/Button";
import Input from "../../core/Input/Input";

import styles from "./OrderModal.module.css";

const OrderModal = (props) => {
  const [customer, setCustomer] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");

  const submitCashOrder = () => {
    props.createOrder({ customer, address, total: props.total, method: 0 });
  };

  return (
    <>
      {props.show && (
        <>
          <Backdrop onClick={props.onCancel} />
          <div className={styles.container} onClick={props.onCancel}>
            <div className={styles.closeModal}>X</div>
            <span className={styles.title}>
              You will have to pay ${props.total} after delivery.
            </span>

            <Input
              defaultStyle
              placeholder="Name Surname"
              value={customer}
              onChange={(e) => setCustomer(e.target.value)}
            />
            <Input
              defaultStyle
              placeholder="Phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
            <textarea
              rows={4}
              placeholder="Your address"
              type="text"
              value={address}
              onChange={(e) => setAddress(e.target.value)}
            />
            <Button simple name="Order" onClick={submitCashOrder} />
          </div>
        </>
      )}
    </>
  );
};

export default OrderModal;
