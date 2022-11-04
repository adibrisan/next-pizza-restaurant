import React, { useEffect, useState } from "react";

import Button from "../Button/Button";
import { NavBarList } from "../../layout/Navbar";

import { MOBILE_SLIDER_TIMEOUT } from "../../../consts";

import styles from "./SliderDrawer.module.css";

const SliderDrawer = ({ open, onClick }) => {
  const [renderSlide, setRenderSlide] = useState(false);
  const sliderStyle = open ? styles.slideDrawer : styles.slideClose;

  useEffect(() => {
    if (open) {
      setRenderSlide(true);
    }
    const timer = setTimeout(() => {
      if (!open) {
        setRenderSlide(false);
      }
    }, MOBILE_SLIDER_TIMEOUT);

    return () => clearTimeout(timer);
  }, [open]);

  return (
    <>
      {renderSlide && (
        <aside className={sliderStyle} onClick={onClick}>
          {/* <ul className={styles.navList}>
            <li>
              <Button name="Home" link />
            </li>
            <li>
              <Button name="Products" link />
            </li>
            <li>
              <Button name="Menu" link />
            </li>
            <li>
              <Button name="Events" link />
            </li>
            <li>
              <Button name="Blog" link />
            </li>
            <li>
              <Button name="Contact" link />
            </li>
          </ul> */}
          <NavBarList />
        </aside>
      )}
    </>
  );
};

export default SliderDrawer;
