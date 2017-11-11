import React from "react";
import Header from "./Header";

const Layout = ({ content, columnRight }) => {
  return (
    <div>
      <Header />
      <div className="container">
        <div className="columns">
          <div className="column is-8">{content}</div>
          <div className="column">{columnRight}</div>
        </div>
      </div>
    </div>
  );
};

export default Layout;
