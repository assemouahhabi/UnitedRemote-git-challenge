import React, { Component } from "react";
import Mockup from "./Mockup";
import Loader from "./Loader";

class List extends Component {
  render() {
    if (this.props.loading) return <Loader />;
    return (
      <div
        className="text-center"
        style={{
          position: "absolute",
          left: "30%",
          top: "10%",
          padding: "5px"
        }}
      >
        {this.props.list.map((item,index) => {
          return (
            <Mockup key={index} repo={item} />
          );
        })}
      </div>
    );
  }
}
 
export default List;