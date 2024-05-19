// src/components/MyPosts.jsx
import React, { useEffect, useState } from 'react';
import PostTile from './PostTile';
import './MyPosts.css'; // Import the CSS file for styling

const MyPosts = ({logInflag,userDetailsContainer}) => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const email = userDetailsContainer.email; // Replace with dynamic email if needed
                const name = email.split('@')[0] + 's'; // Transform email to username
                console.log(name);
                const response = await fetch('https://blogdbapi.onrender.com/FetchAllPosts', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({ username: `${name}` }),
                });

                if (response.ok) {
                    const data = await response.json();
                    setPosts(data);
                } else {
                    console.error('Failed to fetch posts');
                }
            } catch (error) {
                console.error('Error:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="posts-container">
            {posts.map(post => (
                <PostTile
                    key={post._id}
                    title={post.title}
                    content={post.content}
                    imageUrl={post.image} // Assuming your post data includes an imageUrl field
                />
            ))}
        </div>
    );
};

export default MyPosts;
