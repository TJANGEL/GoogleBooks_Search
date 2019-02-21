import React from "react";
import heroImage from "../images/books2.jpg";

const headerStyle = {
  backgroundImage: `url(${heroImage})`,
  maxWidth: "100vw",
  height: "calc(100vw * .43333)",
  backgroundSize: "cover",
  position: "relative"
};

function Header() {
  return (
    <header style={headerStyle}>
      <h1>Google Books Search</h1>
      <p>What Would You Like to Read?</p>
    </header>
  );
}

export default Header;
