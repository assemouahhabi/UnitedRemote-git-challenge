import React from 'react'
import moment from 'moment'

const RepoCard = ({ repo }) => (
  <div>
    <div className="text-md-left">
      <div className="card mb-3">
        <div className="row no-gutters">
          <div className="col-md-2">
            <img
              src={repo.owner.avatar_url}
              className="card-img"
              alt="avatar_url"
              style={{
                padding: '2px',
                maxHeight: '150px',
                maxWidth: '150px'
              }}
            />
          </div>
          <div className="col-md-10">
            <div className="card-body">
              <h5 className="card-title">{repo.name}</h5>
              <p className="card-text text-truncate border-danger">
                {repo.description}
              </p>
              <p
                className="card-text"
                style={{ position: 'absolute', bottom: '5px' }}
              >
                <small className="text-muted">
                  {' '}
                  <span className="badge badge-secondary">
                    <i className="fa fa-star hvr-icon" />
                    {repo.stargazers_count}
                  </span>
                  &nbsp;&nbsp;
                  <span className="badge badge-secondary">
                    Issues:{repo.open_issues}
                  </span>
                  &nbsp;&nbsp;{moment(repo.created_at).fromNow()} By{' '}
                  {repo.owner.login}
                </small>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
)

export default RepoCard
