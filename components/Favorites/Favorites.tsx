import React from "react";
import cx from "classnames";
import useToggleFav from "./useToggleFav";

import styles from "./Favorites.module.css";

// What we want the key's name to be (Put here to make it more straightforward to change)
const favLSKey = "favorites";

interface IFavItemsProps {
  id: number;
  variant: "icon" | "text";
}

export default function Favorites({ id, variant = "icon" }: IFavItemsProps) {
  const [isFav, toggleFav] = useToggleFav(id);

  return (
    <button
      onClick={toggleFav}
      className={cx([
        styles.button,
        styles[`variant__${variant}`],
        { [styles.isFav]: isFav },
      ])}
    ></button>
  );
}
