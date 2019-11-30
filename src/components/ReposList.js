<<<<<<< HEAD
import React from "react";
import RepoCard from "./RepoCard";
=======
import React from 'react'
import RepoCard from './RepoCard'
>>>>>>> CurrentChanges

const ReposList = ({ loading, list }) => (
  <div className="card">
    <ul className="list-group list-group-flush">
      {loading ? (
        <div
          style={{
<<<<<<< HEAD
            fontSize: "150px",
            height: "562px",
            textAlign: "center"
          }}
        >
          {" "}
          <i style={{ marginTop: "200px" }} className="fa fa-spinner fa-spin" />
=======
            fontSize: '150px',
            height: '562px',
            textAlign: 'center'
          }}
        >
          {' '}
          <i style={{ marginTop: '200px' }} className="fa fa-spinner fa-spin" />
>>>>>>> CurrentChanges
        </div>
      ) : (
        <li className="list-group-item">
          {list.map((item, index) => {
<<<<<<< HEAD
            return <RepoCard key={index} repo={item} />;
=======
            return <RepoCard key={index} repo={item} />
>>>>>>> CurrentChanges
          })}
        </li>
      )}
    </ul>
  </div>
<<<<<<< HEAD
);

export default ReposList;
=======
)

export default ReposList
>>>>>>> CurrentChanges
