// Libraries
import React, { useState, useEffect } from "react";
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

  // https://github.com/astoilkov/use-local-storage-state/issues/23
  // Ensures the component is rendered on client-side before rendering the button.
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  // TODO: Add utility function isServer, isClient

  return (
    hasMounted && (
      <button
        onClick={toggleFav}
        className={cx([
          styles.button,
          styles[`variant__${variant}`],
          { [styles.isFav]: isFav },
        ])}
      ></button>
    )
  );
}

export default Favorites;
