import React from "react";
import "./Middle.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faImage } from "@fortawesome/free-solid-svg-icons";
import { faVideo } from "@fortawesome/free-solid-svg-icons";
import { faCalendarWeek } from "@fortawesome/free-solid-svg-icons";
import { faNewspaper } from "@fortawesome/free-solid-svg-icons";
import { faEllipsisH } from "@fortawesome/free-solid-svg-icons";

const Middle = () => {
  return (
    <div className="home-middle-section">
      <div className="middle-top-section common-card">
        <div className="start-post">
          <img src="/images/user.svg" alt="user" />
          <button>Start a post</button>
        </div>
        <div className="options">
          <button>
            <FontAwesomeIcon icon={faImage} />
            <span>Photo</span>
          </button>
          <button>
            <FontAwesomeIcon icon={faVideo} />
            <span>Video</span>
          </button>
          <button>
            <FontAwesomeIcon icon={faCalendarWeek} />
            <span>Event</span>
          </button>
          <button>
            <FontAwesomeIcon icon={faNewspaper} />
            <span>Write article</span>
          </button>
        </div>
      </div>
      <div className="middle-bottom-section common-card">
        <div className="shared-actor">
          <a>
            <img src="/images/user.svg" alt="user" />
            <div className="post-details">
              <span>Title</span>
              <span>Info</span>
              <span>Date</span>
            </div>
          </a>
          <a className="post-detail-menu">
            <FontAwesomeIcon icon={faEllipsisH} />
          </a>
        </div>

        <div className="post-description">
            <p>Description....</p>
            <img src="/images/post1.jpg" alt="post" />
        </div>
        <div className="social-counts">
            <button>
                <div className='social-count-items'>
                    <img src="/images/like.png" alt="like" />
                    <span>1</span>
                </div>
                <div className='social-count-items'>
                    <img src="/images/clap.png" alt="clap" />
                    <span>75</span>
                </div>
                <div className='social-count-items'>
                    <img src="/images/love.png" alt="love" />
                    <span>4</span>
                </div>
            </button>
            <a href="#">2 Comments</a>
        </div>
        <div className='social-actions'>
            <button>
                <img src="/images/like.png" alt="like" />
                <span>Like</span>
            </button>
            <button>
                <img src="/images/comment.png" alt="comment" />
                <span>Comment</span>
            </button>
            <button>
                <img src="/images/share.png" alt="share" />
                <span>Share</span>
            </button>
            <button>
                <img src="/images/send.png" alt="send" />
                <span>Send</span>
            </button>
        </div>
      </div>



      <div className="middle-bottom-section common-card">
        <div className="shared-actor">
          <a>
            <img src="/images/user.svg" alt="user" />
            <div className="post-details">
              <span>Title</span>
              <span>Info</span>
              <span>Date</span>
            </div>
          </a>
          <a className="post-detail-menu">
            <FontAwesomeIcon icon={faEllipsisH} />
          </a>
        </div>

        <div className="post-description">
            <p>Description....</p>
            <img src="/images/post1.jpg" alt="post" />
        </div>
        <div className="social-counts">
            <button>
                <div className='social-count-items'>
                    <img src="/images/like.png" alt="like" />
                    <span>1</span>
                </div>
                <div className='social-count-items'>
                    <img src="/images/clap.png" alt="clap" />
                    <span>75</span>
                </div>
                <div className='social-count-items'>
                    <img src="/images/love.png" alt="love" />
                    <span>4</span>
                </div>
            </button>
            <a href="#">2 Comments</a>
        </div>
        <div className='social-actions'>
            <button>
                <img src="/images/like.png" alt="like" />
                <span>Like</span>
            </button>
            <button>
                <img src="/images/comment.png" alt="comment" />
                <span>Comment</span>
            </button>
            <button>
                <img src="/images/share.png" alt="share" />
                <span>Share</span>
            </button>
            <button>
                <img src="/images/send.png" alt="send" />
                <span>Send</span>
            </button>
        </div>
      </div>


    </div>
  );
};

export default Middle;
