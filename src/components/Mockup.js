import React, { Component } from "react";

class Mockup extends Component {
  render(props) {
    console.log(this.props);
    return (
      <div>
        <div className="wrapper">
          <div className="card mb-3" style={{ maxWidth: 540 }}>
            <div className="row no-gutters">
              <div className="col-md-4">
                <img
                  src={this.props.repo.owner.avatar_url}
                  className="card-img"
                  alt="..."
                />
              </div>
              <div className="col-md-8">
                <div className="card-body">
                  <h5 className="card-title">{this.props.repo.name}</h5>
                  <p className="card-text">{this.props.repo.description}</p>
                  <p className="card-text">
                    <small className="text-muted">
                      {" "}
                      <span class="badge badge-secondary">
                        {this.props.repo.stargazers_count}
                      </span>
                      &nbsp;&nbsp;
                      <span class="badge badge-secondary">
                        {this.props.repo.open_issues}
                      </span>
                      &nbsp;&nbsp;{this.props.repo.created_at} By{" "}
                      {this.props.repo.owner.login}
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
