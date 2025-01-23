import React, { useEffect, useState } from "react";

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
          <NavBarList />
        </aside>
      )}
    </>
  );
};

export default SliderDrawer;
