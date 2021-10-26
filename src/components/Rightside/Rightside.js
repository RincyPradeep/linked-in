import React from "react";
import "./Rightside.css";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHashtag } from '@fortawesome/free-solid-svg-icons'

const Rightside = () => {
  return (
    <div className="home-right-section">
      <div className="title-section">
        <p>Add to your feed</p>
        <img src="/images/feed-icon.svg" alt="feed-icon" />
      </div>
      <div className="feed-list">
        <li>
        <div className='hashtag'>
            <FontAwesomeIcon icon={faHashtag} />
        </div>
          <span className="list-item">
            <p>#Linkedin</p>
            <button>Follow</button>
          </span>
        </li>
        <li>
            <div className='hashtag'>
             <FontAwesomeIcon icon={faHashtag} />
            </div>
          <span className="list-item">
            <p>#Video</p>
            <button>Follow</button>
          </span>
        </li>
      </div>
      <Link to="#" className="recommendation-link">
        View all recommendations
        <img src="/images/right-icon.svg" alt="right arrow" />
      </Link>
    </div>
  );
};

export default Rightside;
