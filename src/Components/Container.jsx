import React, { useState, useEffect } from 'react';
import './Container.css'; // You can define your CSS styles here
import { Link,Navigate,useLocation, useNavigate } from 'react-router-dom';

import PostDetails from './PostDetails';
function Container() {
  const [data, setData] = useState([]);
  useEffect(() => {
    // Fetch data from JSON file or API endpoint
    fetch('data.json') // Assuming your JSON file is named data.json and is in the public folder
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);
  return (
    <div className="container1">
      <h1 className='cont1-heading'>Popular Blogs</h1>
      <br></br>
      <hr></hr>
      <div className="card-container">
        {data.map(item => (
          <Card key={item.id}  data = {item}/>
        ))}
      </div>
    </div>
  );
}

function Card({ data }) {
  const navigate = useNavigate();

  const handleShowMore = () => {
    navigate('/PostDetails', { state: { 
      author: data.author,
      title: data.Title,
      content: data.content,
      image: data.image,
      profile: data.authphoto
    } });
  };
  const shortdesc = data.content.length >145 ? data.content.substr(0,145) +'...': data.content;
  return (
    <div className="card">
      <img src={data.image} alt={data.content} />
      <div className="card-content">
        <h2>{data.Title}</h2>
        <p>{shortdesc}</p>
        <p> <b>Author: {data.author}</b></p>
        <button className='show-btn' onClick={handleShowMore}>show more</button>
      </div>
    </div>
  );
}

export default Container;