import React from "react";
import { Link } from "react-router-dom";

function Nav() {
  // Depending on the current path, this component sets the "active" class on the appropriate navigation link item
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <Link className="navbar-brand" to="/">
        Google Books Search
      </Link>
      <div>
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              to="/saved"
              className={
                window.location.pathname === "/saved"
                  ? "nav-link active"
                  : "nav-link"
              }
            >
              Saved Books
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;
