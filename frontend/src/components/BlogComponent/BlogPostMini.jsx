import React from "react";
import { Link } from "react-router-dom";

const BlogPostMini = ({ data }) => {
  return (
    <div className="BlogMini">
      <h2>{data.title}</h2>
      <img src={`/img/${data.img}.jpg`} alt="hawaii"></img>
      <p>{data.summary}</p>
      <Link to={data.path} className="bloglink">
        Continue reading...
      </Link>
    </div>
  );
};

export default BlogPostMini;
