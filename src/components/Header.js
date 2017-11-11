import React from "react";
import Subject from "./Subject";
import { Link } from "react-router-dom";

const Header = () => (
  <section class="hero">
    <div class="hero-body">
      <div class="container has-text-centered">
        <h1 class="title">
          <Link to="/">TOTEM</Link>
        </h1>
        <h2 class="subtitle">Restez focus</h2>
        {/* <Subject /> */}
      </div>
    </div>
  </section>
);

export default Header;
