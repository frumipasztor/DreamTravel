import React, { useState, useEffect } from "react";
import "./BlogComponent.scss";
import "./BlogComponentResponsivity.scss";
import BlogPostMini from "./BlogPostMini.jsx";
import { Loader } from "../Loader/Loader";

const BlogComponent = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const dataFetch = async () => {
      await fetchData();
    };
    dataFetch();
  }, []);

  const fetchData = async () => {
    const result = await fetch(
      "https://dreamtravelserver.herokuapp.com/api/blog"
    );
    const jsonData = await result.json();
    //      console.log(jsonData);
    setData(jsonData);
    setLoading(false);
  };

  const Blog = () => (
    <div className="blog-content">
      <div className="blog-posts">
        {data.map((data, index) => (
          <BlogPostMini data={data} key={index} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="Blog">
      <h1>Blog</h1>
      {loading ? <Loader /> : <Blog />}
    </div>
  );
};

export default BlogComponent;
