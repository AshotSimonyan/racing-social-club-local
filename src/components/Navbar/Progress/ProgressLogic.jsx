import React, { useState, useRef, useEffect } from "react";
import { theme } from "../../../styles/theme"
const ProgressBar = ({
                       color = "#E8C66C",
                       height = '100%',
                       direction = "right",
                       position = "top",
                       gradient = false,
                       gradientColor = "#BB8A4F"
                     }) => {
  const [scroll, setScroll] = useState(0);
  const ticking = useRef(false);
  useEffect(() => {
    document.addEventListener("scroll", updateProgressBar);
    updateProgressBar();
    return () => document.removeEventListener("scroll", updateProgressBar);
  }, []);
  const updateProgressBar = () => {
    if (!ticking.current) {
      const windowHeight = document.documentElement.offsetHeight - window.innerHeight;
      window.requestAnimationFrame(() => {
        setScroll(Math.floor(window.pageYOffset / windowHeight * 100));
        ticking.current = false;
      });
    }
    ticking.current = true;
  };
  console.log(scroll)
  return (
    <div style={{
      position: "fixed",
      left: 0,
      right: 0,
      height,
      zIndex: 999,
      top: position === "top" ? 0 : "unset",
      bottom: position === "bottom" ? 0 : "unset",
      background: theme.colors.primaryGradient,
      width: `${scroll}%`,
      transition: '3.s'
    }}/>
  )

};
export { ProgressBar as default };
