// Libraries
import React, { useState, useEffect, useMemo } from "react";
import cx from "classnames";

// Functions
import useToggleFav from "./useToggleFav";

// Styles
import styles from "./FavoriteButton.module.css";

// Local Storage Key
// What we want the key's name to be (Put here to make it more straightforward to change)
const Key = "favorites";

interface IFavItemProps {
  id: number;
  variant: "icon" | "text";
}

function Favorites({ id, variant }: IFavItemProps) {
  const [isFav, toggleFav] = useToggleFav(Key, id, false);

  // https://github.com/astoilkov/use-local-storage-state/issues/23
  // Ensures the component is rendered on client-side before rendering the button.
  const [hasMounted, setHasMounted] = useState(false);

  function clickHandler() {
    toggleFav();
  }

  useEffect(() => {
    setHasMounted(true);
    // console.log("Favorites Button Mounted.");
  }, []);

  console.log(`- Movie [ ${id} ]: ${isFav} -`);

  return (
    hasMounted && (
      <button
        onClick={clickHandler}
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
