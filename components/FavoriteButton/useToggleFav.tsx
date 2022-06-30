import { useEffect, useState } from "react";

// What we want the key's name to be (Put here to make it more straightforward to change)
const Key = "favorites";

export default function useToggleFav(id: number) {
  const [isFav, setIsFav] = useState(() => {
    if (typeof window !== undefined) return isMovieInFav(id);
  });

  // setter function to be returned
  const toggleFav = () => {
    //console.log(`- Toggled Fav for Movie [ ${id} ]`);
    setIsFav((currFav) => !currFav);
    updateLS(id, isFav);
  };

  return [isFav, toggleFav] as const;
}

function isMovieInFav(id: number) {
  const data = JSON.parse(window.localStorage.getItem(Key));

  // Local Storage Item does not exist
  if (!data?.length) return false;

  // Find item in array
  return !!data.find((i) => i === id);
}

function updateLS(id: number, isFav: boolean) {
  const data = JSON.parse(window.localStorage.getItem(Key)) || [];

  // Either add or remove the id to/from array
  const newData = data.includes(id)
    ? JSON.stringify(data.filter((i) => i !== id))
    : JSON.stringify([...data, id]);

  window.localStorage.setItem(Key, newData);
}
