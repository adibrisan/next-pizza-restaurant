import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import {
  PayPalScriptProvider,
  PayPalButtons,
  usePayPalScriptReducer,
} from "@paypal/react-paypal-js";

import { resetCart } from "../redux/cartSlice";

import Button from "../components/core/Button/Button";

import styles from "../styles/Cart.module.css";
import OrderModal from "../components/custom/OrderModal/OrderModal";

const Cart = () => {
  const [paypalOpen, setPaypalOpen] = useState(false);
  const [withCash, setWithCash] = useState(false);

  const router = useRouter();
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const amount = cart.total;
  const currency = "USD";
  const style = { layout: "vertical" };

  const createOrder = async (data) => {
    try {
      const res = await axios.post(`${process.env.BASE_URL}/orders`, data);

      if (res.status === 201) {
        router.push(`/orders/${res.data._id}`);
      }
      dispatch(resetCart());
    } catch (err) {
      console.log(err);
    }
  };

  // Custom component to wrap the PayPalButtons and handle currency changes
  const ButtonWrapper = ({ currency, showSpinner }) => {
    // usePayPalScriptReducer can be use only inside children of PayPalScriptProviders
    // This is the main reason to wrap the PayPalButtons in a new component
    const [{ options, isPending }, dispatch] = usePayPalScriptReducer();

    useEffect(() => {
      dispatch({
        type: "resetOptions",
        value: {
          ...options,
          currency: currency,
        },
      });
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currency, showSpinner]);

    return (
      <>
        {showSpinner && isPending && <div className="spinner" />}
        <PayPalButtons
          style={style}
          disabled={false}
          forceReRender={[amount, currency, style]}
          fundingSource={undefined}
          createOrder={(data, actions) => {
            return actions.order
              .create({
                purchase_units: [
                  {
                    amount: {
                      currency_code: currency,
                      value: amount,
                    },
                  },
                ],
              })
              .then((orderId) => {
                // Your code here after create the order
                return orderId;
              });
          }}
          onApprove={function (data, actions) {
            return actions.order.capture().then(function (details) {
              const shipping = details.purchase_units[0].shipping;
              createOrder({
                customer: shipping.name.full_name,
                address: shipping.address.address_line_1,
                phone: shipping.phone_number,
                total: cart.total,
                method: 1,
              });
            });
          }}
        />
      </>
    );
  };

  return (
    <>
      <Head>
        <title>Your order</title>
        <meta name="order" content="Order details" />
        <link rel="icon" href="/pizza.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.pizzaOrders}>
          <table className={styles.tableContainer}>
            <tbody>
              <tr className={styles.row}>
                <th>Product</th>
                <th>Name</th>
                <th>Extras</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
              </tr>
              {cart.products.map((pizza, index) => (
                <tr key={index}>
                  <td>
                    <div className={styles.imgContainer}>
                      <Image
                        src={pizza.img}
                        alt="ordered pizza"
                        layout="fill"
                        objectFit="cover"
                        priority
                      />
                    </div>
                  </td>
                  <td>
                    <span className={styles.pizzaName}>{pizza.title}</span>
                  </td>
                  <td>
                    <span className={styles.extras}>
                      {pizza.extra.map((item) => item.title + " ")}
                    </span>
                  </td>
                  <td>
                    <span className={styles.pizzaPrice}>${pizza.price}</span>
                  </td>
                  <td>
                    <span className={styles.pizzaQuantity}>
                      {pizza.quantity}
                    </span>
                  </td>
                  <td>
                    <span className={styles.pizzaTotal}>
                      ${pizza.price * pizza.quantity}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className={styles.cartOrder}>
          <div className={styles.cartWrapper}>
            <h2 className={styles.title}>Cart total</h2>
            <div className={styles.lastDetails}>
              <b>Subtotal:</b> ${cart.total}
            </div>
            <div className={styles.lastDetails}>
              <b>Discount:</b> $0.00
            </div>
            <div className={styles.lastDetails}>
              <b>Total:</b> ${cart.total}
            </div>
          </div>
          <Button
            name="Checkout order"
            className={styles.checkoutBtn}
            onClick={() => setPaypalOpen(true)}
          />
          {paypalOpen && (
            <>
              <div className={styles.cashBtn}>
                <Button
                  simple
                  name="Cash on delivery"
                  onClick={() => setWithCash(true)}
                />
              </div>
              <div className={styles.paypalBtn}>
                <PayPalScriptProvider
                  options={{
                    "client-id":
                      "AXFQc43Or4iNvEHpyKxXhF4s6DQJ0ZyTsNiF64zJQpqFgEE5fohnFsUmkimTGS1H1GJpYFkn96gE6x-2",
                    components: "buttons",
                    currency: "USD",
                    "disable-funding": "credit,card",
                  }}
                >
                  <ButtonWrapper currency={currency} showSpinner={false} />
                </PayPalScriptProvider>
              </div>
            </>
          )}
        </div>
      </div>
      <OrderModal
        show={withCash}
        onCancel={() => setWithCash(false)}
        total={cart.total}
        createOrder={createOrder}
      />
    </>
  );
};

export default Cart;
