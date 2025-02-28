import React from 'react';

function Newsitem({ title, description, src, url }) {
  return (
    <div className="card bg-dark text-light mb-3 d-inline-block my-3 mx-3 px-2 py-2" style={{ maxWidth: '345px' }}>
      <img src={src} style={{ height: '200px', width: '335px' }} className="card-img-top" alt="News" />
      <div className="card-body">
        <h5 className="card-title">{title?.slice(0, 50)}</h5>
        {description ? (
          <p className="card-text">{description.slice(0, 90)}</p>
        ) : (
          <p className="card-text">It is information about something that has just happened.</p>
        )}
        <a href={url} className="btn btn-primary">Read More</a>
      </div>
    </div>
  );
}

export default Newsitem;
