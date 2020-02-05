import React, { Component } from "react";
import LoginBtn from "./LoginBtn";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="/">
          Blog-app React Redux
        </a>
        <div className="navbar-nav">
          <LoginBtn />
        </div>
      </nav>
    );
  }
}

export default Navbar;
