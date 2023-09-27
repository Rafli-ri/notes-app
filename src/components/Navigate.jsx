import React from "react";
import { Link } from "react-router-dom";

const Navigate = () => {
  return (
    <>
      <h1>
        <Link to="/">Notes App</Link>
      </h1>
      <nav className="navigation">
        <ul>
          <li>
            <Link to="/archiev">Arsip</Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navigate;
