// Libraries
import React, { useState } from "react";

// Functions
import { Results } from "components/Results";
import { Trending } from "components/Trending";
import Searchbar from "./Searchbar";

// Styles
import sbstyles from "./Searchbar.module.css";
import styles from "./Search.module.css";

function Search() {
  const [showSearch, setShowSearch] = useState(false);

  const showSearchHandler = () => {
    console.log("Open Search Bar");
    setShowSearch(true);
  };

  return (
    <main className={sbstyles.main}>
      {!showSearch && (
        <button className={sbstyles.showSearchBtn} onClick={showSearchHandler}>
          <img
            src="/searchIcon512px.png"
            alt="Search"
            className={sbstyles.btnIcon}
          ></img>
        </button>
      )}

      {showSearch && <Searchbar />}
    </main>
  );
}

export default Search;
