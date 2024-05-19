import React from 'react'
import { useState, useEffect } from 'react';
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import './review.css'
const Review = () => {
    var settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true
      };
    const [data, setData] = useState([]);

  useEffect(() => {
    // Fetch data from JSON file or API endpoint
    fetch('reviews.json') // Assuming your JSON file is named authorData.json and is in the public folder
      .then(response => response.json())
      .then(jsonData => setData(jsonData))
      .catch(error => console.error('Error fetching data:', error));
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < rating) {
            stars.push(<i key={i} className="fa-solid fa-star"></i>);
        } else {
            stars.push(<i key={i} className="far fa-star"></i>);
        }
    }
    return stars;
};
  return (
    <>
          <div className="card-container2">
        <h1 className="rev">Reviews</h1>
        <Slider {...settings}>
        {data.map(item => (
          <div className="cards2" key={item.user}>
            <div className='review'>
            <i className="fa-solid fa-quote-left"></i>
                <p>{item.comment}</p>
            </div>
            <div className='user-info'>
                <div className='user-img'>
                    <img src={item.photo} alt="" className='img' />
                </div>
                <div className='user-name'>
                    <h2>{item.user}</h2>
                    {renderStars(item.rating)}
                </div>
            </div>
          </div>
        ))}
        </Slider>
      </div>
    </>
  )
}

export default Review
