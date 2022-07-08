import { useState } from "react";

// Local Storage Key
// What we want the key's name to be (Put here to make it more straightforward to change)
const Key = "favorites";

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
}

export default function useToggleFav(id: number): [boolean, () => void] {
  const [isFav, setIsFav] = useState(() => {
    return isMovieInFav(Key, id);
  });

  // setter function to be returned
  const toggleFav = () => {
    setIsFav((currFav) => !currFav);
    updateLS(Key, id);
  };

  return [isFav, toggleFav];
}
