import React, { useEffect, useState } from "react";

import styles from "./SliderDrawer.module.css";

const SliderDrawer = ({ open, onClick, children }) => {
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
    }, 500);

    return () => clearTimeout(timer);
  }, [open]);

  return (
    <>
      {renderSlide && (
        <aside className={sliderStyle} onClick={onClick}>
          {children}
        </aside>
      )}
    </>
  );
};

export default SliderDrawer;
