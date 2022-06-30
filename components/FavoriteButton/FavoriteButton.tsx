// Libraries
import React from "react";
import cx from "classnames";

// Functions
import useToggleFav from "./useToggleFav";

// Styles
import styles from "./FavoriteButton.module.css";

interface IFavItemProps {
  id: number;
  variant: "icon" | "text";
}

function Favorites({ id, variant }: IFavItemProps) {
  const [isFav, toggleFav] = useToggleFav(id);

  //console.log(`- Favorites Button rendered for Movie [ ${id} ]-`);

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

export default Favorites;
