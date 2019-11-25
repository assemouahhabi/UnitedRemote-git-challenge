import React, { Component } from "react";

class Loader extends Component {
  render() {
    return (
      <div
        className="loader center"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)"
        }}
      >
        <i className="fa fa-cog fa-spin" />
      </div>
    );
  }
}

export default Loader;
