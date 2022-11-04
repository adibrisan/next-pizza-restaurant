import axios from "axios";
import { useState, Fragment } from "react";
import { useDispatch } from "react-redux";
import Head from "next/head";
import Image from "next/image";

import { addProduct } from "../../redux/cartSlice";

import Button from "../../components/core/Button/Button";
import Input from "../../components/core/Input/Input";

import styles from "../../styles/Product.module.css";

const Product = ({ pizza }) => {
  const [price, setPrice] = useState(pizza.prices[1]);
  const [size, setSize] = useState(0);
  const [noPizza, setNoPizza] = useState(1);
  const [extra, setExtra] = useState([]);

  const dispatch = useDispatch();

  const changePrice = (nr) => {
    setPrice(price + nr);
  };

  const handleSize = (pizzaSize) => {
    const priceDifference = pizza.prices[pizzaSize] - pizza.prices[size];
    setSize(pizzaSize);
    changePrice(priceDifference);
  };

  const handleExtraChange = (e, option) => {
    const checked = e.target.checked;

    if (checked) {
      changePrice(option.price);
      setExtra((prevExtra) => [...prevExtra, option]);
    } else {
      changePrice(-option.price);
      setExtra(extra.filter((extra) => extra._id !== option._id));
    }
  };

  const handleSubmit = () => {
    dispatch(addProduct({ ...pizza, extra, price, quantity: noPizza }));
  };

  return (
    <>
      <Head>
        <title>Choose your pizza</title>
        <meta name="description" content="Best pizza in town" />
        <link rel="icon" href="/pizza.ico" />
      </Head>
      <div className={styles.container}>
        <div className={styles.pizzaImg}>
          <Image
            src={pizza.img}
            alt="picked pizza"
            layout="responsive"
            width="500px"
            height="500px"
            loading="lazy"
          />
        </div>
        <div className={styles.pizzaOptions}>
          <h1>{pizza.title}</h1>
          <h2>$ {price}</h2>
          <div className={styles.description}>{pizza.description}</div>
          <div className={styles.size}>
            <h2>Choose the size</h2>
            <div className={styles.pizzaSizes}>
              <div
                className={styles.sizeContainer}
                onClick={() => handleSize(0)}
              >
                <div className={styles.category}>Small</div>
                <Image
                  src="/img/size.png"
                  alt="pizza size"
                  width="40p"
                  height="40px"
                  loading="lazy"
                />
              </div>
              <div
                className={styles.sizeContainer}
                onClick={() => handleSize(1)}
              >
                <div className={styles.category}>Medium</div>
                <Image
                  src="/img/size.png"
                  alt="pizza size"
                  width="60p"
                  height="60px"
                  loading="lazy"
                />
              </div>
              <div
                className={styles.sizeContainer}
                onClick={() => handleSize(2)}
              >
                <div className={styles.category}>Large</div>
                <Image
                  src="/img/size.png"
                  alt="pizza size"
                  width="70p"
                  height="70px"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
          <div className={styles.additional}>
            <h2>Choose additional ingredients</h2>
            <div className={styles.additionContainer}>
              {pizza.extra.map((option) => (
                <Fragment key={option._id}>
                  <input
                    id={option._id}
                    type="checkbox"
                    className={styles.checkbox}
                    onClick={(e) => handleExtraChange(e, option)}
                  />
                  <label className={styles.checkboxTitle} htmlFor={option._id}>
                    {option.title}
                  </label>
                </Fragment>
              ))}
            </div>
          </div>
          <div className={styles.submit}>
            <Input
              type="number"
              value={noPizza}
              onChange={(e) => setNoPizza(e.target.value)}
            />
            <Button entity="&rarr;" name="Add to Cart" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Product;

export const getServerSideProps = async ({ params }) => {
  const res = await axios.get(
    `${process.env.NEXT_PUBLIC_BASE_URL}/products/${params.id}`
  );

  return {
    props: {
      pizza: res.data,
    },
  };
};
