import Image from "next/image";

import styles from "../../styles/Admin.module.css";

const index = () => {
  return (
    <div className={styles.container}>
      <div className={styles.products}>
        <h1 className={styles.title}>Products</h1>
        <table className={styles.tableContainer}>
          <tbody>
            <tr className={styles.row}>
              <th>Product image</th>
              <th>Id</th>
              <th>Title</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
            {/* {cart.products.map((pizza, index) => ( */}
            <tr key={index}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    alt="ordered pizza"
                    layout="responsive"
                    width="60px"
                    height="60px"
                    objectFit="cover"
                    priority
                  />
                </div>
              </td>
              <td>
                <span className={styles.pizzaId}>pizza title</span>
              </td>
              <td>
                <span className={styles.pizzaTitle}>exttrras</span>
              </td>
              <td>
                <span className={styles.pizzaPrice}>$15</span>
              </td>
              <td>
                <span className={styles.pizzaAction}>45</span>
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
      <div className={styles.orders}>
        <table className={styles.tableContainer}>
          <tbody>
            <tr className={styles.row}>
              <th>Id</th>
              <th>Customer</th>
              <th>Total</th>
              <th>Payment</th>
              <th>Status</th>
              <th>Next Status Stage</th>
            </tr>
            {/* {cart.products.map((pizza, index) => ( */}
            <tr key={index}>
              <td>
                <div className={styles.imgContainer}>
                  <Image
                    src="/img/pizza.png"
                    alt="ordered pizza"
                    layout="fill"
                    objectFit="cover"
                    priority
                  />
                </div>
              </td>
              <td>
                <span className={styles.pizzaName}>pizza title</span>
              </td>
              <td>
                <span className={styles.extras}>
                  {/* {pizza.extra.map((item) => item.title + " ")} */}
                  adi
                </span>
              </td>
              <td>
                <span className={styles.pizzaPrice}>$2</span>
              </td>
              <td>
                <span className={styles.pizzaQuantity}>1</span>
              </td>
              <td>
                <span className={styles.pizzaTotal}>$2</span>
              </td>
            </tr>
            {/* ))} */}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default index;
