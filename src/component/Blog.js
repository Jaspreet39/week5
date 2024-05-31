import React from "react";
import "./blog.css";

function Blog({ img, header, heading, name }) {
  return (
    <div className="blog">
      <img className="blog_img" src={img} alt="" height="400px" width="400px" />
      <div className="blog_content">
        <div>
          <p>{header}</p>
          <h2>{heading}</h2>
          <h4>{name}</h4>
        </div>
        <button className="blog_button">View Course</button>
      </div>
    </div>
  );
}

export default Blog;
