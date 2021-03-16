import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMusic } from "@fortawesome/free-solid-svg-icons";

const Nav = ({ libraryStatus, setLibrarysStatus }) => {
  return (
    <nav>
      <h1>MusicPlayer</h1>
      <button onClick={() => setLibrarysStatus(!libraryStatus)}>
        Library
        <FontAwesomeIcon className="" icon={faMusic} />
      </button>
    </nav>
  );
};

export default Nav;
