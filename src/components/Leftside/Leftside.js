import React from "react";
import "./Leftside.css";

const Leftside = () => {
  return (
    <div className="home-left-section">
      <div className="left-top-section common-card">
        <img src="/images/card-bg.svg" alt="card" className="card-bg" />
        <div className="photo">
          <img src="/images/photo.svg" alt="photo" />
        </div>
        <div className="name-section">
          <h3>Welcome, Rincy</h3>
          <a href="#">Add a photo</a>
        </div>
        <div className="connection-section">
          <div className="connection-data">
            <p>Connections</p>
            <h4>Grow your network</h4>
          </div>
          <img src="/images/widget-icon.svg" alt="widget-icon" className='widget-icon' />
        </div>
        <div className="item-section">
          <img src="/images/item-icon.svg" alt="item-icon" />
          <h4>My Items</h4>
        </div>
      </div>
      <div className="left-bottom-section common-card">
        <div className="left-bottom-data">
          <span>
            <h4>Groups</h4>
            <h4>Events</h4>
            <h4>Follows Hashtags</h4>
          </span>
          <img src="/images/plus-icon.svg" alt="plus-icon" className='plus-icon' />
        </div>
        <p>Discover more</p>
      </div>
    </div>
  );
};

export default Leftside;
