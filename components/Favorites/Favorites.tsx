// Libraries
import React from "react";
import cx from "classnames";

// Functions
import useToggleFav from "./useToggleFav";

// Styles
import styles from "./Favorites.module.css";

interface IFavItemProps {
  id: number;
  variant: "icon" | "text";
}

export default function Favorites({ id, variant }: IFavItemProps) {
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
