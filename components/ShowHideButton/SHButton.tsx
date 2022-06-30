// Libraries
import { StaticImageData } from "next/image";
import React, { useState, useEffect, useMemo } from "react";

// Functions

// Styles
import styles from "./SHButton.module.css";

interface ISHButtonProps {
  btnText: string;
  btnIcon?: string;
  btnType: "toggle" | "showOnly";
  children?: JSX.Element;
}

function SHButton({ btnText, btnIcon, btnType, children }: ISHButtonProps) {
  const [show, setShow] = useState(false);

  console.log(btnIcon);
  const showHideHandler = () => {
    switch (btnType) {
      case "toggle":
        setShow(!show);
      case "showOnly":
        setShow(true);
    }
  };

  return (
    <>
      {show && children}
      {!show && (
        <button className={styles.btn} onClick={showHideHandler}>
          {
            <img
              src={getBtnIcon(btnIcon)}
              alt={btnText}
              className={styles.btnIcon}
            ></img>
          }
        </button>
      )}
    </>
  );
}

function getBtnIcon(icon: string) {
  switch (icon) {
    case "search":
      return "/searchIcon512px.png";
  }
}

export default SHButton;
