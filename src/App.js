import React, { Component } from "react";
import "./App.css";
import Mockup from "./components/Mockup";
import Axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
    };
  }
  componentDidMount() {
    this.getInfo();
  }
  getInfo() {
    let url =
      "https://api.github.com/search/repositories?q=created:>2017-10-22&sort=stars&order=desc";
    Axios.get(url).then(response => {
      var info = response.data.items;
      this.setState({
        list: info
      });
    });
  }

  render() {
    return (
      <div>
        {this.state.list.map((item, index) => {
          return <Mockup key={index} repo={item} />;
        })}
        } )}
      </div>
    );
  }
}

export default App;
