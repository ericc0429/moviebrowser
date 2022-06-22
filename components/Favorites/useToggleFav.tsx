import React, { useState } from "react";

const LS_KEY = "moviedb";

function movieInFavorites(id) {
  const data = JSON.parse(window.localStorage.getItem(LS_KEY));

  // Local Storage Item does not exist
  if (!data?.length) return false;

  //   Find item in array
  return !!data.find((i) => i === id);
}

function updateLS(id: number, isFav: boolean) {
  const data = JSON.parse(window.localStorage.getItem(LS_KEY)) || [];

  // Either add or remove the id to the array
  const newData = isFav
    ? JSON.stringify([...data, id])
    : JSON.stringify(data.filter((i) => i !== id));

  window.localStorage.setItem(LS_KEY, newData);
}

export default function useToggleFav(id: number): [boolean, () => void] {
  const [isFav, setIsFav] = useState(() => {
    if (typeof window !== "undefined") return movieInFavorites(id);
  });

  // Setter function to be returned
  function toggleFav() {
    setIsFav(!isFav);
    updateLS(id, !isFav);
  }

  return [isFav, toggleFav];
}
