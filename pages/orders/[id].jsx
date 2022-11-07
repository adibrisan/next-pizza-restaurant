import axios from "axios";
import Head from "next/head";
import Image from "next/image";

import Button from "../../components/core/Button/Button";

import styles from "../../styles/Order.module.css";

const Order = ({ order }) => {
  const status = order.status;

  const statusSteps = (index) => {
    if (index - status < 1) {
      return styles.done;
    } else if (index - status === 1) {
      return styles.inProgress;
    } else if (index - status > 1) {
      return styles.ship;
    }
  };

  return (
    <>
      <Head>
        <title>Your order</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/pizza.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.shippingContainer}>
          <div className={styles.row}>
            <table className={styles.tableContainer}>
              <tbody>
                <tr className={styles.row}>
                  <th>Order ID</th>
                  <th>Customer</th>
                  <th>Address</th>
                  <th>Total</th>
                </tr>
                <tr>
                  <td>
                    <span className={styles.orderId}>{order._id}</span>
                  </td>
                  <td>
                    <span className={styles.customerName}>
                      {order.customer}
                    </span>
                  </td>
                  <td>
                    <span className={styles.address}>{order.address}</span>
                  </td>
                  <td>
                    <span className={styles.total}>${order.total}</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className={styles.row}>
            <div className={statusSteps(0)}>
              <Image src="/img/paid.png" width={30} height={30} alt="paid" />
              <span>Payment</span>
              <div className={styles.checkedIcon}>
                <Image
                  src="/img/checked.png"
                  width={20}
                  height={20}
                  alt="paid"
                  loading="lazy"
                />
              </div>
            </div>
            <div className={statusSteps(1)}>
              <Image src="/img/bake.png" width={30} height={30} alt="paid" />
              <span>Preparing</span>
              <div className={styles.checkedIcon}>
                <Image
                  src="/img/checked.png"
                  width={20}
                  height={20}
                  alt="paid"
                  loading="lazy"
                />
              </div>
            </div>
            <div className={statusSteps(2)}>
              <Image src="/img/bike.png" width={30} height={30} alt="paid" />
              <span>Shipping</span>
              <div className={styles.checkedIcon}>
                <Image
                  src="/img/checked.png"
                  width={20}
                  height={20}
                  alt="paid"
                  loading="lazy"
                />
              </div>
            </div>
            <div className={statusSteps(3)}>
              <Image
                src="/img/delivered.png"
                width={30}
                height={30}
                alt="paid"
                loading="lazy"
              />
              <span>Delivered</span>
              <div className={styles.checkedIcon}>
                <Image
                  src="/img/checked.png"
                  width={20}
                  height={20}
                  alt="paid"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cartContainer}>
          <div className={styles.cartWrapper}>
            <h2 className={styles.title}>Cart total</h2>
            <div className={styles.lastDetails}>
              <b>Subtotal:</b> ${order.total}
            </div>
            <div className={styles.lastDetails}>
              <b>Discount:</b> $0.00
            </div>
            <div className={styles.lastDetails}>
              <b>Total:</b> ${order.total}
            </div>
          </div>
          <Button name="Paid" simple className={styles.checkoutBtn} />
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(`api/orders/${params.id}`);

  return {
    props: {
      order: res.data,
    },
  };
};

export default Order;
