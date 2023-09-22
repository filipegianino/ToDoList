import React from "react";
import style from "./footer.module.css"

const Footer = () => {
  return (
    <footer className={style.footer}>
      <p>
        <span>React + TS ToDo</span> @ 2023
      </p>
    </footer>
  );
};

export default Footer;