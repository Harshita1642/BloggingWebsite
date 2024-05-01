import React,{ useEffect} from 'react'
import './postdetails.css'
import { useLocation } from 'react-router-dom';

const PostDetails = (props) => {
  const location = useLocation() 
  console.log(location)
  const {author, content, image, title , profile } = location.state;
  return (
   <>
   <div className='Post-container'>
    <div className='post-info-card'>
      <div className='Author-post-info'>
        <div className='post-author-image'>
        <img src={profile} alt="" />
        </div>
        <div className='name-of-author'>
          <h2>{author}</h2>
          <p>Blogger</p>
          </div>
          <div className='edit-buttons'>
        <button className='edit-btn'>Edit</button>
        <button className='delete-btn'>Delete</button>
      </div>
      </div>
      <div className='post-image'>
        <h1>{title}</h1>
        <img src={image} alt="" />
      </div>
      <div className='post-contant'>
        <p>{content}</p>
      </div>
    </div>
   </div>
   </>
  )
}

export default PostDetails
