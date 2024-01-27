import React, { useEffect, useRef } from "react";
import "./scrolling.css";

import img from "../../assets/images/cunstructq.jpg";

const Scrolling = () => {
  const container = useRef(null);
  const mask = useRef(null);
  useEffect(() => {
    requestAnimationFrame(animate);
  }, []);

  const initialMaskSize = 0.1;
  const targetMaskSize = 30;

  const animate = () => {
    const masksize = targetMaskSize * getScrollProgress();
    mask.current.style.webkitMaskSize =
      (initialMaskSize + masksize) * 100 + "%";
    requestAnimationFrame(animate);
  };

  const getScrollProgress = () => {
    const scrollProgress =
      mask.current.offsetTop /
      (container.current.getBoundingClientRect().height - window.innerHeight);
    return scrollProgress;
  };

  return (
    <main className="scrolling">
      <div ref={container} className="scrollContainer">
        <div ref={mask} className="stickymask">
          <img src={img} alt="no image" />
        </div>
      </div>
    </main>
  );
};

export default Scrolling;
