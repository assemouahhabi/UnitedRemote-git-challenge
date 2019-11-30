import React from "react";
import RepoCard from "./RepoCard";

const ReposList = ({ loading, list }) => (
  <div className="card">
    <ul className="list-group list-group-flush">
      {loading ? (
        <div
          style={{
            fontSize: "150px",
            height: "562px",
            textAlign: "center"
          }}
        >
          {" "}
          <i style={{ marginTop: "200px" }} className="fa fa-spinner fa-spin" />
        </div>
      ) : (
        <li className="list-group-item">
          {list.map((item, index) => {
            return <RepoCard key={index} repo={item} />;
          })}
        </li>
      )}
    </ul>
  </div>
);

export default ReposList;
