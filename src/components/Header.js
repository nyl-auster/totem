import React from "react";
import { Link } from "react-router-dom";

const Header = () => (
  <section className="hero">
    <div className="hero-body">
      <div className="container has-text-centered">
        <h1 className="title">
          <Link to="/">TOTEM</Link>
        </h1>
        <h2 className="subtitle">Restez focus</h2>
        {/* <Subject /> */}
      </div>
    </div>
  </section>
);

export default Header;
