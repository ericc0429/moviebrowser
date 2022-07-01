import { useState } from "react";

export default function useToggleFav(key: string, id: number) {
  const [isFav, setIsFav] = useState(() => {
    return isMovieInFav(key, id);
  });

  // setter function to be returned
  const toggleFav = () => {
    //console.log(`- Toggled Fav for Movie [ ${id} ]`);
    setIsFav((currFav) => !currFav);
    updateLS(key, id);
  };

  /* 
  const toggleFav = (newFav: boolean) => {
    setIsFav(newFav);
    updateLS(key, id, isFav);
  };
 */
  return [isFav, toggleFav] as const;
}

function isMovieInFav(key: string, id: number) {
  if (typeof window !== "undefined") {
    const data = JSON.parse(window.localStorage.getItem(key));

    // Local Storage Item does not exist
    if (!data?.length) return false;

    // Find item in array
    return !!data.find((i) => i === id);
  }
}

function updateLS(key: string, id: number) {
  const data = JSON.parse(window.localStorage.getItem(key)) || [];

  // Either add or remove the id to/from array
  const newData = data.includes(id)
    ? JSON.stringify(data.filter((i) => i !== id))
    : JSON.stringify([...data, id]);

  window.localStorage.setItem(key, newData);

  console.log("localStorage updated");
}
