import React, {useState, useEffect} from 'react';
import './BlogComponent.scss';
import BlogPostMini from './BlogPostMini.jsx';

const BlogComponent = () => {

    const [data, setData] = useState([]);

    useEffect(() => {
        const dataFetch = async () => {
          await fetchData();
        };
        dataFetch();
      }, []);

      const fetchData = async () => {
        const result = await fetch("/api/blog");
        const jsonData = await result.json();
        console.log(jsonData);
        setData(jsonData);
      };

    return (
        <div className="Blog">
            <div className="blog-content">
                <h1>Blog</h1>
                <div className="blog-posts">
                  {data.map((data, index) => <BlogPostMini data={data} key={index}/>)}
                </div>
            </div>
        </div>
    )
}

export default BlogComponent
