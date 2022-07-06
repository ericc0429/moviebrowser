// Libraries
import React, { useState } from "react";

// Functions
import Searchbar from "./Searchbar";

// Styles
import sbstyles from "./Searchbar.module.css";

function Search() {
  const [showSearch, setShowSearch] = useState(false);

  const showSearchHandler = () => {
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
