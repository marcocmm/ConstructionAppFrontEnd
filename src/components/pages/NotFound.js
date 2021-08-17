import React from "react";
import Navbar from "../layout/Navbar";

const NotFound = () => {
  return (
    <div>
      <Navbar type="home" />
      <div style={{ marginLeft: 150, marginTop: 50 }}>
        <h1>Not Found</h1>
        <p className="lead">The page you are looking for does not exist...</p>
      </div>
    </div>
  );
};

export default NotFound;
