import React, { Component } from "react";
import Mockup from "./Mockup";

class List extends Component {
  render() {
    return (
      <div className="card">
        <ul className="list-group list-group-flush">
          {this.props.loading ? (
            <div style={{ fontSize: "150px", textAlign: "center" }}>
              {" "}
              <i className="fa fa-spinner fa-spin" />
            </div>
          ) : (
            <li className="list-group-item">
              {this.props.list.map((item, index) => {
                return <Mockup key={index} repo={item} />;
              })}
            </li>
          )}
        </ul>
      </div>
    );
  }
}

export default List;
