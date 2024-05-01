import React from 'react';
import './createpost.css'
const AmazingPost = ({ title, text, imageUrl }) => {
  return (
    <div className="post2">
      <img className="post2-image" src={imageUrl} alt="Post" />
      <div className="post-content">
        <h2 className="post-title">{title}</h2>
        <p className="post-text">{text}</p>
      </div>
    </div>
  );
};

export default AmazingPost;