import React, { Component } from "react";
import moment from "moment";

class Mockup extends Component {
  render(props) {
    return (
      <div>
        <div className="text-md-left">
          <div className="card mb-3">
            <div className="row no-gutters">
              <div className="col-md-2">
                <img
                  src={this.props.repo.owner.avatar_url}
                  className="card-img"
                  alt="avatar_url"
                  style={{
                    padding: "2px",
                    maxHeight: "150px",
                    maxWidth: "150px"
                  }}
                />
              </div>
              <div className="col-md-10">
                <div className="card-body">
                  <h5 className="card-title">{this.props.repo.name}</h5>
                  <p className="card-text text-truncate border-danger">
                    {this.props.repo.description}
                  </p>
                  <p
                    className="card-text"
                    style={{ position: "absolute", bottom: "5px" }}
                  >
                    <small className="text-muted">
                      {" "}
                      <span className="badge badge-secondary">
                        <i className="fa fa-star hvr-icon" />
                        {this.props.repo.stargazers_count}
                      </span>
                      &nbsp;&nbsp;
                      <span className="badge badge-secondary">
                        Issues:{this.props.repo.open_issues}
                      </span>
                      &nbsp;&nbsp;{moment(this.props.repo.created_at).fromNow()}{" "}
                      By {this.props.repo.owner.login}
                    </small>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Mockup;
