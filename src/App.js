import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Blog from "./components/Blog";

class App extends Component {
  render() {
    return (
      <div>
        <Navbar />
        <Blog />
      </div>
    );
  }
}

export default App;
