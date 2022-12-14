import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useState } from "react";

import SliderDrawer from "../core/SliderDrawer/SliderDrawer";
import MobileNav from "../core/MobileNav/MobileNav";
import Button from "../core/Button/Button";

import { MENU_OFFSET } from "../../consts";

import styles from "../../styles/Navbar.module.css";

export const NavBarList = () => {
  const router = useRouter();

  const goToBottom = async (e) => {
    if (router.pathname !== "/") {
      await router.push("/");
    }
    e.preventDefault();
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  const goToMenu = async (e) => {
    if (router.pathname !== "/") {
      await router.push("/");
    }
    e.preventDefault();
    window.scrollTo({
      top: MENU_OFFSET,
      behavior: "smooth",
    });
  };

  return (
    <div className={styles.navItem}>
      <ul className={styles.navList}>
        <li className={styles.listItem}>
          <Button name="Home" link href="/" passHref />
        </li>
        <li className={styles.listItem}>
          <Button onClick={goToMenu} name="Menu" link />
        </li>
        <div className={styles.mainLogo}>
          <Image
            src="/img/logo.png"
            alt="logo image"
            width="350px"
            height="200px"
            loading="lazy"
          />
        </div>
        <li className={styles.listItem}>
          <Button name="Blog" link />
        </li>
        <li className={styles.listItem}>
          <Button onClick={goToBottom} name="Contact" link />
        </li>
      </ul>
    </div>
  );
};

const Navbar = () => {
  const [drawerIsOpen, setDrawerIsOpen] = useState(false);

  const quantity = useSelector((state) => state.cart.quantity);

  const toggleDrawer = () => {
    setDrawerIsOpen((prev) => !prev);
  };

  return (
    <nav className={styles.container}>
      <div className={styles.navItem}>
        <div className={styles.callItem}>
          <Image
            src="/img/telephone.png"
            alt="call image"
            width="32px"
            height="32px"
            loading="lazy"
          />
        </div>
        <div className={styles.texts}>
          <div className={styles.text}>Order now</div>
          <div className={styles.text}>0333 333 333</div>
        </div>
      </div>
      <NavBarList />
      <Link href="/cart" passHref>
        <div className={styles.navItem}>
          <div className={styles.cart}>
            <Image
              src="/img/cart.png"
              alt="logo image"
              width="30px"
              height="30px"
              loading="lazy"
            />
            <div className={styles.counter}>
              <div className={styles.number}>{quantity}</div>
            </div>
          </div>
        </div>
      </Link>
      <MobileNav open={drawerIsOpen} onClick={toggleDrawer} />
      <SliderDrawer
        open={drawerIsOpen}
        onClick={() => setDrawerIsOpen(false)}
      />
    </nav>
  );
};

export default Navbar;
