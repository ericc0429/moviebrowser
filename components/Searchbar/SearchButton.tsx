// Libraries
import React, { useState } from "react";

// Functions
import Searchbar from "./Searchbar";

// Styles
import sbstyles from "./Searchbar.module.css";

function SearchButton() {
  const [showSearch, setShowSearch] = useState(false);

  const showSearchHandler = () => {
    setShowSearch(true);
  };

  return (
    <main className={sbstyles.main}>
      {!showSearch && (
        <button className={sbstyles.showSearchBtn} onClick={showSearchHandler}>
          <img
            src="/searchicon.svg"
            alt="Search"
            className={sbstyles.btnIcon}
          ></img>
        </button>
      )}

      {showSearch && <Searchbar />}
    </main>
  );
}

export default SearchButton;
