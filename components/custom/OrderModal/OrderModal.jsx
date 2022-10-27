import Backdrop from "../Backdrop/Backdrop";
import Button from "../../core/Button/Button";
import Input from "../../core/Input/Input";

import styles from "./OrderModal.module.css";

const OrderModal = (props) => {
  return (
    <>
      {props.show && (
        <>
          <Backdrop onClick={props.onCancel} />
          <div className={styles.container} onClick={props.onCancel}>
            <div className={styles.closeModal}>X</div>
            <span className={styles.title}>
              You will have to pay $10 after delivery.
            </span>

            <Input defaultStyle placeholder="Name Surname" />
            <Input defaultStyle placeholder="Phone" />
            <textarea rows={4} placeholder="Your address" type="text" />
            <Button simple name="Order" />
          </div>
        </>
      )}
    </>
  );
};

export default OrderModal;
