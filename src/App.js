import React, { Component } from "react";
import "./App.css";
import List from "./components/List";
import Axios from "axios";
import moment from "moment";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      list: [],
      loading: true,
      url: "",
      page: 0,
      fetchInProgress: false,
      error: false
    };
    this.handleScroll = this.handleScroll.bind(this);
  }
  componentDidMount() {
    this.fetchGithub();
    this.fetchAnotherGithub();
    window.addEventListener("scroll", this.handleScroll, true);
  }
  componentWillMount() {
    this.getUrl();
    window.removeEventListener("scroll", this.handleScroll);
  }
  increment() {
    this.setState({
      page: this.state.page + 1
    });
  }
  getDate() {
    let currentDate = moment().format("YYYY-MM-DD");
    let startDate = moment()
      .subtract(30, "days")
      .format("YYYY-MM-DD");
    return [startDate, currentDate];
  }
  getUrl() {
    let tmpDate = this.getDate();
    let startDate = tmpDate[0];
    let currentDate = tmpDate[1];
    this.setState({
      url:
        "https://api.github.com/search/repositories?q=created:" +
        startDate +
        ".." +
        currentDate +
        "&sort=stars&order=desc&page=0"
    });
  }
  getOtherUrl() {
    this.increment();
    let page = this.state.page;
    let tmpDate = this.getDate();
    let startDate = tmpDate[0];
    let currentDate = tmpDate[1];
    this.setState({
      url:
        "https://api.github.com/search/repositories?q=created:" +
        startDate +
        ".." +
        currentDate +
        "&sort=stars&order=desc&page=" +
        page
    });
  }
  fetchAnotherGithub() {
    this.getOtherUrl();
    let url = this.state.url;
    Axios.get(url)
      .then(response => {
        var info = response.data.items;
        this.setState({
          list: this.state.list.concat([...info]),
          fetchInProgress: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: true
        });
      });
  }
  fetchGithub() {
    let url = this.state.url;
    Axios.get(url)
      .then(response => {
        var info = response.data.items;
        this.setState({
          list: info,
          loading: false
        });
      })
      .catch(error => {
        console.log(error);
        this.setState({
          error: true
        });
      });
  }
  handleScroll = () => {
    const windowHeight =
      "innerHeight" in window
        ? window.innerHeight
        : document.documentElement.offsetHeight;
    const body = document.body;
    const html = document.documentElement;
    const docHeight = Math.max(
      body.scrollHeight,
      body.offsetHeight,
      html.clientHeight,
      html.scrollHeight,
      html.offsetHeight
    );
    const windowBottom = windowHeight + window.pageYOffset;
    if (windowBottom >= docHeight) {
      this.fetchAnotherGithub();
      this.setState({
        fetchInProgress: true
      });
    } else {
      console.log("bottom not reached");
    }
  };
  render() {
    let list = this.state.list;
    return (
      <div>
        <div className="card-header bg-dark" id="title">
          The most stared repositories of this month
        </div>
        <div className="card-body">
          <List
            loading={this.state.loading}
            list={list}
            onScroll={this.handleScroll}
          />
        </div>

        <div
          className="card-footer bg-dark"
          style={{ textAlign: "center", fontSize:"20px", color:"white" }}
        >
            {this.state.fetchInProgress ? (
              this.state.error ? (
                <i className="fa fa-exclamation-circle" />
              ) : (
                <i className="fa fa-spinner fa-spin" />
              )
            ) : (
              <i className="fa fa fa-check-circle	" />
            )}
        </div>
      </div>
    );
  }
}
export default App;
