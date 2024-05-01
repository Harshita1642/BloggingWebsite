import React, { useState } from 'react';
import 'jodit';
import JoditEditor from 'jodit-react';
import UploadWidget from './UploadWidget';
import AmazingPost from './Postcard';
import './postcreateform.css'
const PostForm = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [imageUrl, setImageUrl] = useState('');
  const [postCreated,setpostCreated]=useState(false);

  const stripHtmlTags = (html) => {
    const doc = new DOMParser().parseFromString(html, 'text/html');
    return doc.body.textContent || "";
  };

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

 const createPost =   (e) => {
    e.preventDefault();
    console.log("Title:"+title);
    // await setContent( stripHtmlTags(content));
    console.log("Text:",  stripHtmlTags(content));
    console.log("Url:"+imageUrl);
    fetch('https://blogdbapi.onrender.com/createPost', {
         method: 'POST',
         body: JSON.stringify({
            username: 'keshav',
            post:[
              {
                title: title,
                content:  stripHtmlTags(content),
                image: imageUrl,
                date: Date(),
                reviews:[
                  {
                    name:"John",
                   comment:"Great post!"
                  },
                  {
                    name:"Jane",
                    comment:"I love this post!"
                  }]
              }
            ]
         }),
         headers: {
            'Content-type': 'application/json; charset=UTF-8',
         },
      })
      console.log("done");
      setpostCreated(true);
  };

  const whileUpload = (url) => {
    console.log("uploading image" + url);
    setImageUrl(url);
  }

  return (
    <div className="post-form">
      <h2>Create a New Post</h2>
      {/* <form onSubmit={createPost}> */}
        <div className="form-group">
          <label htmlFor="title">Title:</label>
          <input
            type="text"
            id="title"
            value={title}
            onChange={handleTitleChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="content">Content:</label>
          <JoditEditor
            value={content}
            onChange={(newContent) => setContent(newContent)}
            tabIndex={1}
            onBlur={(newContent) => setContent(newContent)}
          />
        </div>
        <UploadWidget uploadUrl={whileUpload} />
        <button type="button" onClick={createPost} className='post-button'>Create Post</button>
        {postCreated && <AmazingPost title={title} text={stripHtmlTags(content)}  imageUrl={imageUrl}/>}
        {/* <div className='content' dangerouslySetInnerHTML={{ __html: content }} /> */}

      {/* </form> */}
    </div>
  );
};

export default PostForm;