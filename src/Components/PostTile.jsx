// src/components/PostTile.jsx
import React from 'react';
import './PostTile.css'; // Import the CSS file for styling

const PostTile = ({ title, content, imageUrl }) => {
    return (
        <div className="post-tile">
            {imageUrl && <img src={imageUrl} alt={title} className="post-tile-image" />}
            <div className="post-tile-content">
                <h2 className="post-tile-title">{title}</h2>
                <p className="post-tile-text">{content}</p>
            </div>
        </div>
    );
};

export default PostTile;
