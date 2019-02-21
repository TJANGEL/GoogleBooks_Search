import React from "react";
import heroImage from "../images/books2.jpg";

const headerStyle = {
  backgroundImage: `url(${heroImage})`,
  maxWidth: "100vw",
  height: "30vw",
  backgroundSize: "cover",
  position: "relative"
};

function Header() {
  return (
    <header style={headerStyle}>
      <h1>
        <span className="g">G</span>
        <span className="o1">o</span>
        <span className="o2">o</span>
        <span className="g">g</span>
        <span className="l">l</span>
        <span className="e">e</span> Books Search
      </h1>
      <p>What Would You Like to Read?</p>
    </header>
  );
}

export default Header;
