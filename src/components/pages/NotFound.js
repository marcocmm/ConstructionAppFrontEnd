import React from "react";
import Navbar from "../layout/Navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar type="home" />

      <h1>Not Found</h1>
      <p className="lead">The page you are looking for does not exist...</p>
    </div>
  );
};

export default NotFound;
