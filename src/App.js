import React, { Component } from "react";
import "./App.css";
import ReposList from "./components/ReposList";
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
  
  // function to increment pages on each loading
  increment() {
    this.setState({
      page: this.state.page + 1
    });
  }

  //function that get the last 30 days from the current date:
  getDate() {
    let currentDate = moment().format("YYYY-MM-DD");
    let startDate = moment()
      .subtract(30, "days")
      .format("YYYY-MM-DD");
    return [startDate, currentDate];
  }

  //functions dispatching URL in the state
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

  //functions for fetching URLs
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

  //function which detect the end of page on crolling and call the fetch function if bottom reached
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
    }
  };

  render() {
    const { loading, list, error, fetchInProgress } = this.state;

    return (
      <div>
        <div className="card-header bg-dark" id="title">
          <h2>The most stared repositories of this month</h2>
        </div>
        <div className="card-body">
          <ReposList
            loading={loading}
            list={list}
            onScroll={this.handleScroll}
          />
        </div>

        <div
          className="card-footer bg-dark"
          style={{ textAlign: "center", fontSize: "20px", color: "white" }}
        >
          {fetchInProgress ? (
            error ? (
              <i className="fa fa-exclamation-circle" />
            ) : (
              <i className="fa fa-spinner fa-spin" />
            )
          ) : (
            <i className="fa fa-spinner fa-spin" />
          )}
        </div>
      </div>
    );
  }
}
export default App;
