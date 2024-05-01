import React, { useEffect, useState } from "react";
import './author.css'
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const Auther = () => {
    const settings = {
        dots: true,
        infinite:true,
        speed: 500,
        slidesToShow:3,
        slidesToScroll:3
    };
  const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file or API endpoint
    fetch('authorData.json') // Assuming your JSON file is named authorData.json and is in the public folder
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <div className="sec-3">
      <div className="card-container1">
        <h1 className="pop-auth">Popular Authors</h1>
      <Slider {...settings}>
        {data.map(item => (
          <div className="cards" key={item.name}>
            <div className="photo">
              <img src={item.author_image} alt=""/>
            </div>
            <div className="info">
              <h2 className="name">{item.name}</h2>
              <p className="about-author">{item.about}</p>
              <button className="read-more">read more</button>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </div>
    </>
  );
};

export default Auther;
